import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Course } from '../entities/Course';
import { ICourseRepository } from 'src/modules/course/contracts/repositories/ICourseRepository';
import { ICreateCourseDTO } from 'src/modules/course/contracts/dtos/ICreateCourse.DTO';
import { IUpdateCourseDTO } from 'src/modules/course/contracts/dtos/IUpdateCourse.DTO';

@EntityRepository(Course)
class CourseRepository implements ICourseRepository {
    private ormRepository: Repository<Course>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Course);
    }

    public async create({ description, menu }: ICreateCourseDTO): Promise<Course> {
        const course = this.ormRepository.create({ description, menu })
        return await this.ormRepository.save(course);
    }

    public async list(): Promise<Course[]> {
        return await this.ormRepository.find()
    }

    public async show(code: number): Promise<Course> {
        return await this.ormRepository.findOneBy({ code })
    }

    public async update({ code, description, menu }: IUpdateCourseDTO): Promise<boolean> {
        const updated = await this.ormRepository.update(
            { code },
            { description, menu }
        )
        return updated.affected >= 1
    }

    public async delete(code: number): Promise<boolean> {
        const deleted = await this.ormRepository.delete(code)
        return deleted.affected >= 1
    }
}

export { CourseRepository };