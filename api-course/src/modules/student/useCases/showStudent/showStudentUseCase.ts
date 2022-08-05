import { Inject, Injectable } from "@nestjs/common";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Aluno } from "../../infra/typeorm/entities/Aluno";

@Injectable()
export class ShowStudentUseCase {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(codigo: number): Promise<Aluno> {
        return this.studentRepository.show(codigo)
    }
}