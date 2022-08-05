import { Inject, Injectable } from "@nestjs/common";
import { ICreateStudentDTO } from "../../contracts/dtos/ICreateStudent.DTO";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Aluno } from "../../infra/typeorm/entities/Aluno";

@Injectable()
export class CreateStudentUseCases {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(data: ICreateStudentDTO): Promise<Aluno> {
        return await this.studentRepository.create(data)
    }
}