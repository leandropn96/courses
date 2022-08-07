import { Inject, Injectable } from "@nestjs/common";
import { IStudentsCourseRepository } from "../../contracts/repositories/IStudentsCourseRepository";
import { StudentsCourse } from "../../infra/typeorm/entities/CourseStudents";

@Injectable()
export class ListStudentCoursesUseCases {
    constructor(
        @Inject('StudentCourseRepository')
        private studentsCourseRepository: IStudentsCourseRepository,
    ) { }
    public async execute(code_course: number, name: string): Promise<StudentsCourse[]> {
        console.log(code_course, name)
        const res = await this.studentsCourseRepository.list(code_course, name)
        console.log(res)
        return res
    }
}