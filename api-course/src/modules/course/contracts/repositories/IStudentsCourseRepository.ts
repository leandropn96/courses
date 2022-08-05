import { StudentsCourse } from "../../infra/typeorm/entities/CursoAluno";
import { ICreateStudentCourseDTO } from "../dtos/ICreateStudentCourse.DTO";

interface IStudentsCourseRepository {
    create(data: ICreateStudentCourseDTO): Promise<StudentsCourse>
    list(codigo_curso: number, nome: string): Promise<StudentsCourse[]>
}

export { IStudentsCourseRepository };
