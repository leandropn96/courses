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

    public async create({ descricao, ementa }: ICreateCourseDTO): Promise<Course> {
        console.log("chegou onde não deveria")
        const course = this.ormRepository.create({ descricao, ementa })
        return await this.ormRepository.save(course);
    }

    public async list(): Promise<Course[]> {
        return await this.ormRepository.find()
    }

    public async show(codigo: number): Promise<Course> {
        return await this.ormRepository.findOneBy({ codigo })
    }

    public async update({ codigo, descricao, ementa }: IUpdateCourseDTO): Promise<boolean> {
        const updated = await this.ormRepository.update(
            { codigo },
            { descricao, ementa }
        )
        return updated.affected >= 1
    }

    public async delete(codigo: number): Promise<boolean> {
        const deleted = await this.ormRepository.delete(codigo)
        return deleted.affected >= 1
    }
}

export { CourseRepository };