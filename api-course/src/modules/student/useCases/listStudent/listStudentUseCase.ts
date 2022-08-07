import { Inject, Injectable } from "@nestjs/common";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Student } from "../../infra/typeorm/entities/Student";

@Injectable()
export class ListStudentsUseCases {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(): Promise<Student[]> {
        const aluno = await this.studentRepository.list()
        return aluno
    }
}