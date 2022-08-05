import { Course } from "../../infra/typeorm/entities/Course";
import { ICreateCourseDTO } from "../dtos/ICreateCourse.DTO";
import { IUpdateCourseDTO } from "../dtos/IUpdateCourse.DTO";

interface ICourseRepository {
    create(data: ICreateCourseDTO): Promise<Course>
    list(): Promise<Course[]>
    show(codigo: number): Promise<Course>
    update(data: IUpdateCourseDTO): Promise<boolean>
    delete(codigo: number): Promise<boolean>
}

export { ICourseRepository };
