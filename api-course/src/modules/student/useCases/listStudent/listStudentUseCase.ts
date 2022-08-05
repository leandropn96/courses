import { Inject, Injectable } from "@nestjs/common";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Aluno } from "../../infra/typeorm/entities/Aluno";

@Injectable()
export class ListStudentsUseCases {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(): Promise<Aluno[]> {
        const aluno = await this.studentRepository.list()
        return aluno
    }
}