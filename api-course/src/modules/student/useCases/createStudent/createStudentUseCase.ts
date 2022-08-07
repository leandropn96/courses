import { Inject, Injectable } from "@nestjs/common";
import { ICreateStudentDTO } from "../../contracts/dtos/ICreateStudent.DTO";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Student } from "../../infra/typeorm/entities/Student";

@Injectable()
export class CreateStudentUseCases {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(data: ICreateStudentDTO): Promise<Student> {
        console.log(data)
        return await this.studentRepository.create(data)
    }
}