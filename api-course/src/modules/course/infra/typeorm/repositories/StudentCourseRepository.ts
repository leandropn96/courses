import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { IStudentsCourseRepository } from 'src/modules/course/contracts/repositories/IStudentsCourseRepository';
import { StudentsCourse } from '../entities/CourseStudents';
import { ICreateStudentCourseDTO } from 'src/modules/course/contracts/dtos/ICreateStudentCourse.DTO';

@EntityRepository(StudentsCourse)
class StudentCourseRepository implements IStudentsCourseRepository {
    private ormRepository: Repository<StudentsCourse>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(StudentsCourse);
    }

    public async create({ code_student, code_course }: ICreateStudentCourseDTO): Promise<StudentsCourse> {
        const course = this.ormRepository.create({ code_student, code_course })
        return await this.ormRepository.save(course);
    }

    public async list(code_course: number, name: string): Promise<StudentsCourse[]> {
        const query = this.ormRepository.createQueryBuilder('course_students')
            .leftJoinAndSelect('course_students.student', 'student')
            .leftJoinAndSelect('course_students.course', 'course')
            .where(
                '(course_students.code_course = :code_course)', { code_course },
            )
        if (name) {
            query.andWhere(
                '(student.name LIKE :name)', { name: `%${name}%` },
            );
        }
        return await query.getMany()
    }
}

export { StudentCourseRepository };