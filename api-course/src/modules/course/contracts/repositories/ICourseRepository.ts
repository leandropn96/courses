import { Course } from "../../infra/typeorm/entities/Course";
import { ICreateCourseDTO } from "../dtos/ICreateCourse.DTO";
import { IUpdateCourseDTO } from "../dtos/IUpdateCourse.DTO";

interface ICourseRepository {
    create(data: ICreateCourseDTO): Promise<Course>
    list(): Promise<Course[]>
    show(code: number): Promise<Course>
    update(data: IUpdateCourseDTO): Promise<boolean>
    delete(code: number): Promise<boolean>
}

export { ICourseRepository };
