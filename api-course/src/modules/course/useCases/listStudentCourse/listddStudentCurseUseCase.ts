import { Inject, Injectable } from "@nestjs/common";
import { IStudentsCourseRepository } from "../../contracts/repositories/IStudentsCourseRepository";
import { StudentsCourse } from "../../infra/typeorm/entities/CursoAluno";

@Injectable()
export class ListStudentCoursesUseCases {
    constructor(
        @Inject('StudentCourseRepository')
        private studentsCourseRepository: IStudentsCourseRepository,
    ) { }
    public async execute(codigo_curso: number, nome: string): Promise<StudentsCourse[]> {
        return await this.studentsCourseRepository.list(codigo_curso, nome)
    }
}