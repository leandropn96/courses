import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Student } from '../entities/Student';
import { IStudentRepository } from '../../../contracts/repositories/ICourseRepository';
import { ICreateStudentDTO } from '../../../contracts/dtos/ICreateStudent.DTO';
import { IUpdateStudentDTO } from '../../../contracts/dtos/IUpdateCourse.DTO';

@EntityRepository(Student)
class StudentRepository implements IStudentRepository {
    private ormRepository: Repository<Student>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Student);
    }

    public async create({ name }: ICreateStudentDTO): Promise<Student> {
        const student = this.ormRepository.create({ name })
        return await this.ormRepository.save(student);
    }

    public async list(): Promise<Student[]> {
        return await this.ormRepository.find()
    }

    public async show(code: number): Promise<Student> {
        return await this.ormRepository.findOneBy({ code })
    }

    public async update({ code, name }: IUpdateStudentDTO): Promise<boolean> {
        const updated = await this.ormRepository.update(
            { code },
            { name }
        )
        return updated.affected >= 1
    }
}

export { StudentRepository };