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
        console.log(message, "teste")
        const cursos = await this.createCoursesUseCases.execute(message)
        return cursos
    }

    @MessagePattern('list-course')
    public async listCourse(): Promise<Course[]> {
        return await this.listCoursesUseCases.execute()
    }

    @MessagePattern('show-course')
    public async showCourse() {
        const cursos = await this.listCoursesUseCases.execute()
        return cursos
    }

    @MessagePattern('update-course')
    public async updateCourse(@Payload('message') message: IUpdateCourseDTO) {
        console.log(message, "teste")
        const cursos = await this.updateCourseUseCase.execute(message)
        return cursos
    }

    @MessagePattern('delete-course')
    public async deleteCourse(@Payload('message') message: number) {
        console.log(message)
        const cursos = await this.deleteCourseUseCase.execute(message)
        return cursos
    }

    @MessagePattern('create-student-course')
    public async addStudentCourse(@Payload('message') message: ICreateStudentCourseDTO) {
        console.log(message)
        const cursos = await this.addStudentCoursesUseCases.execute(message)
        return cursos
    }

    @MessagePattern('list-student-course')
    public async addSutdentCourse(@Payload('message') { codigo_curso, nome }: IListStudentCourseDTO) {
        const cursos = await this.listStudentCoursesUseCases.execute(codigo_curso, nome)
        return cursos
    }
}