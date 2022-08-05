import { Inject, Injectable } from "@nestjs/common";
import { ICourseRepository } from "../../contracts/repositories/ICourseRepository";
import { Course } from "../../infra/typeorm/entities/Course";

@Injectable()
export class ListCoursesUseCases {
    constructor(
        @Inject('CourseRepository')
        private courseRepository: ICourseRepository,
    ) { }
    public async execute(): Promise<Course[]> {
        const courses = await this.courseRepository.list()
        console.log(courses)
        return courses
    }
}