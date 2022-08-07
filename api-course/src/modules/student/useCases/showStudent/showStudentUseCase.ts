import { Inject, Injectable } from "@nestjs/common";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";
import { Student } from "../../infra/typeorm/entities/Student";

@Injectable()
export class ShowStudentUseCase {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(code: number): Promise<Student> {
        return this.studentRepository.show(code)
    }
}