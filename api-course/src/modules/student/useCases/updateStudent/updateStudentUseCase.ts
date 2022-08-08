import { Inject, Injectable } from "@nestjs/common";
import { IUpdateStudentDTO } from "../../contracts/dtos/IUpdateCourse.DTO";
import { IStudentRepository } from "../../contracts/repositories/ICourseRepository";

@Injectable()
export class UpdateStudentsUseCase {
    constructor(
        @Inject('StudentRepository')
        private studentRepository: IStudentRepository,
    ) { }
    public async execute(data: IUpdateStudentDTO): Promise<boolean> {
        return this.studentRepository.update(data)
    }
}