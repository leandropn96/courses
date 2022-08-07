import { Inject, Injectable } from "@nestjs/common";
import { ICourseRepository } from "../../contracts/repositories/ICourseRepository";

@Injectable()
export class DeleteCourseUseCase {
    constructor(
        @Inject('CourseRepository')
        private courseRepository: ICourseRepository,
    ) { }
    public async execute(code: number): Promise<boolean> {

        return this.courseRepository.delete(code)
    }
}