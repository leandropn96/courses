import { Inject, Injectable } from "@nestjs/common";
import { IUpdateCourseDTO } from "../../contracts/dtos/IUpdateCourse.DTO";
import { ICourseRepository } from "../../contracts/repositories/ICourseRepository";

@Injectable()
export class UpdateCourseUseCase {
    constructor(
        @Inject('CourseRepository')
        private courseRepository: ICourseRepository,
    ) { }
    public async execute(data: IUpdateCourseDTO): Promise<boolean> {
        console.log(data)
        return this.courseRepository.update(data)
    }
}