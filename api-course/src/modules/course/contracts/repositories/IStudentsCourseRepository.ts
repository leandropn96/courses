import { StudentsCourse } from "../../infra/typeorm/entities/CourseStudents";
import { ICreateStudentCourseDTO } from "../dtos/ICreateStudentCourse.DTO";

interface IStudentsCourseRepository {
    create(data: ICreateStudentCourseDTO): Promise<StudentsCourse>
    list(code_corse: number, name: string): Promise<StudentsCourse[]>
}

export { IStudentsCourseRepository };
