import { Inject, Injectable } from "@nestjs/common";
import { ICreateStudentCourseDTO } from "../../contracts/dtos/ICreateStudentCourse.DTO";
import { IStudentsCourseRepository } from "../../contracts/repositories/IStudentsCourseRepository";
import { StudentsCourse } from "../../infra/typeorm/entities/CourseStudents";

@Injectable()
export class AddStudentCoursesUseCases {
    constructor(
        @Inject('StudentCourseRepository')
        private studentsCourseRepository: IStudentsCourseRepository,
    ) { }
    public async execute(data: ICreateStudentCourseDTO): Promise<StudentsCourse> {
        return await this.studentsCourseRepository.create(data)
    }
}