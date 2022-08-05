import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { Course } from '../entities/Course';
import { ICreateCourseDTO } from 'src/modules/course/contracts/dtos/ICreateCourse.DTO';
import { IStudentsCourseRepository } from 'src/modules/course/contracts/repositories/IStudentsCourseRepository';
import { StudentsCourse } from '../entities/CursoAluno';
import { ICreateStudentCourseDTO } from 'src/modules/course/contracts/dtos/ICreateStudentCourse.DTO';

@EntityRepository(StudentsCourse)
class StudentCourseRepository implements IStudentsCourseRepository {
    private ormRepository: Repository<StudentsCourse>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(StudentsCourse);
    }

    public async create({ codigo_aluno, codigo_curso }: ICreateStudentCourseDTO): Promise<StudentsCourse> {
        console.log(codigo_aluno, codigo_curso, "bateu onde quero")
        const course = this.ormRepository.create({ codigo_aluno, codigo_curso })
        return await this.ormRepository.save(course);
    }

    public async list(codigo_curso: number, nome: string): Promise<StudentsCourse[]> {
        const query = this.ormRepository.createQueryBuilder('aluno_curso')
            .leftJoinAndSelect('aluno_curso.aluno', 'student')
            .leftJoinAndSelect('aluno_curso.course', 'course')
            .where(
                '(aluno_curso.codigo_curso = :codigo_curso)', { codigo_curso },
            )
        if (nome) {
            query.andWhere(
                '(student.nome LIKE :nome)', { nome: `%${nome}%` },
            );
        }
        return await query.getMany()
    }
}

export { StudentCourseRepository };