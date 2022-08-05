import { Aluno } from "../../infra/typeorm/entities/Aluno";
import { ICreateStudentDTO } from "../dtos/ICreateStudent.DTO";
import { IUpdateStudentDTO } from "../dtos/IUpdateCourse.DTO";

interface IStudentRepository {
    create(data: ICreateStudentDTO): Promise<Aluno>
    list(): Promise<Aluno[]>
    show(codigo: number): Promise<Aluno>
    update(data: IUpdateStudentDTO): Promise<boolean>
}

export { IStudentRepository };
