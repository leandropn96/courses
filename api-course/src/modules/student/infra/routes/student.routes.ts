import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ICreateStudentDTO } from "../../contracts/dtos/ICreateStudent.DTO";
import { ListStudentsUseCases } from "../../useCases/listStudent/listStudentUseCase";
import { CreateStudentUseCases } from '../../useCases/createStudent/createStudentUseCase';
import { UpdateStudentsUseCase } from "../../useCases/updateStudent/updateStudentUseCase";
import { ShowStudentUseCase } from "../../useCases/showStudent/showStudentUseCase"
import { IUpdateStudentDTO } from "../../contracts/dtos/IUpdateCourse.DTO";
import { Aluno } from "../typeorm/entities/Aluno";

@Controller('students')
export class StudentController {
    constructor(
        private readonly createStudentUseCases: CreateStudentUseCases,
        private readonly listStudentsUseCases: ListStudentsUseCases,
        private readonly updateStudentsUseCase: UpdateStudentsUseCase,
        private readonly showStudentUseCase: ShowStudentUseCase,
    ) { }

    @MessagePattern('create-student')
    public async createstudent(@Payload('message') message: ICreateStudentDTO) {
        console.log(message)
        const student = await this.createStudentUseCases.execute(message)
        return student
    }

    @MessagePattern('list-student')
    public async listStudent(): Promise<Aluno[]> {
        console.log("bateu aqui")
        const student = await this.listStudentsUseCases.execute()
        console.log(student)
        return student
    }

    @MessagePattern('show-student')
    public async showCourse() {
        const student = await this.showStudentUseCase.execute(1)
        return student
    }

    @MessagePattern('update-student')
    public async updateCourse(@Payload('message') message: IUpdateStudentDTO) {
        const cursos = await this.updateStudentsUseCase.execute(message)
        return cursos
    }
}