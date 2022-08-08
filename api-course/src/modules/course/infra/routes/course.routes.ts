import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ICreateCourseDTO } from "../../contracts/dtos/ICreateCourse.DTO";
import { ListCoursesUseCases } from "../../useCases/listCourse/listCurseUseCase";
import { CreateCoursesUseCases } from '../../useCases/createCourse/createCurseUseCase';
import { UpdateCourseUseCase } from "../../useCases/updateCourse/updateCurseUseCase";
import { DeleteCourseUseCase } from "../../useCases/deleteCourse/deleteCurseUseCase";
import { AddStudentCoursesUseCases } from "../../useCases/addStudentCourse/createaddStudentCurseUseCase";
import { ListStudentCoursesUseCases } from "../../useCases/listStudentCourse/listddStudentCurseUseCase";
import { IUpdateCourseDTO } from "../../contracts/dtos/IUpdateCourse.DTO";
import { Course } from "../typeorm/entities/Course";
import { ICreateStudentCourseDTO, IListStudentCourseDTO } from "../../contracts/dtos/ICreateStudentCourse.DTO";

@Controller('courses')
export class CourseController {
    constructor(
        private readonly listCoursesUseCases: ListCoursesUseCases,
        private readonly createCoursesUseCases: CreateCoursesUseCases,
        private readonly updateCourseUseCase: UpdateCourseUseCase,
        private readonly deleteCourseUseCase: DeleteCourseUseCase,
        private readonly addStudentCoursesUseCases: AddStudentCoursesUseCases,
        private readonly listStudentCoursesUseCases: ListStudentCoursesUseCases
    ) { }

    @MessagePattern('create-course')
    public async createCourse(@Payload('message') message: ICreateCourseDTO) {
        const courses = await this.createCoursesUseCases.execute(message)
        return courses
    }

    @MessagePattern('list-course')
    public async listCourse(): Promise<Course[]> {
        return await this.listCoursesUseCases.execute()
    }

    @MessagePattern('show-course')
    public async showCourse() {
        const courses = await this.listCoursesUseCases.execute()
        return courses
    }

    @MessagePattern('update-course')
    public async updateCourse(@Payload('message') message: IUpdateCourseDTO) {
        const courses = await this.updateCourseUseCase.execute(message)
        return courses
    }

    @MessagePattern('delete-course')
    public async deleteCourse(@Payload('message') message: number) {
        const courses = await this.deleteCourseUseCase.execute(message)
        return courses
    }

    @MessagePattern('create-student-course')
    public async addStudentCourse(@Payload('message') message: ICreateStudentCourseDTO) {
        const courses = await this.addStudentCoursesUseCases.execute(message)
        return courses
    }

    @MessagePattern('list-student-course')
    public async addSutdentCourse(@Payload('message') { code_course, name }: IListStudentCourseDTO) {
        const courses = await this.listStudentCoursesUseCases.execute(code_course, name)
        return courses
    }
}