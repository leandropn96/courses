import { Student } from "../../infra/typeorm/entities/Student";
import { ICreateStudentDTO } from "../dtos/ICreateStudent.DTO";
import { IUpdateStudentDTO } from "../dtos/IUpdateCourse.DTO";

interface IStudentRepository {
    create(data: ICreateStudentDTO): Promise<Student>
    list(): Promise<Student[]>
    show(code: number): Promise<Student>
    update(data: IUpdateStudentDTO): Promise<boolean>
}

export { IStudentRepository };
