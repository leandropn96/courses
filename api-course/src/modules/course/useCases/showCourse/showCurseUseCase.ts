import { Inject, Injectable } from "@nestjs/common";
import { ICourseRepository } from "../../contracts/repositories/ICourseRepository";
import { Course } from "../../infra/typeorm/entities/Course";

@Injectable()
export class ShowCourseUseCase {
    constructor(
        @Inject('CourseRepository')
        private courseRepository: ICourseRepository,
    ) { }
    public async execute(codigo: number): Promise<Course> {
        return this.courseRepository.show(codigo)
    }
}