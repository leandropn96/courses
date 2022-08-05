import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Aluno } from '../entities/Aluno';
import { IStudentRepository } from '../../../contracts/repositories/ICourseRepository';
import { ICreateStudentDTO } from '../../../contracts/dtos/ICreateStudent.DTO';
import { IUpdateStudentDTO } from '../../../contracts/dtos/IUpdateCourse.DTO';

@EntityRepository(Aluno)
class StudentRepository implements IStudentRepository {
    private ormRepository: Repository<Aluno>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(Aluno);
    }

    public async create({ nome }: ICreateStudentDTO): Promise<Aluno> {
        const student = this.ormRepository.create({ nome })
        return await this.ormRepository.save(student);
    }

    public async list(): Promise<Aluno[]> {
        return await this.ormRepository.find()
    }

    public async show(codigo: number): Promise<Aluno> {
        return await this.ormRepository.findOneBy({ codigo })
    }

    public async update({ codigo, nome }: IUpdateStudentDTO): Promise<boolean> {
        const updated = await this.ormRepository.update(
            { codigo },
            { nome }
        )
        return updated.affected >= 1
    }
}

export { StudentRepository };