import { Inject, Injectable } from "@nestjs/common";
import { ICreateCourseDTO } from "../../contracts/dtos/ICreateCourse.DTO";
import { ICourseRepository } from "../../contracts/repositories/ICourseRepository";
import { Course } from "../../infra/typeorm/entities/Course";

@Injectable()
export class CreateCoursesUseCases {
    constructor(
        @Inject('CourseRepository')
        private courseRepository: ICourseRepository,
    ) { }
    public async execute(data: ICreateCourseDTO): Promise<Course> {
        return await this.courseRepository.create(data)
    }
}