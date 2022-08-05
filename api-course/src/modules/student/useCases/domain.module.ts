import { Module } from "@nestjs/common";
import { RepositoriesModule } from "../contracts/repositories.module";
import { CreateStudentUseCases } from "./createStudent/createStudentUseCase";
import { ListStudentsUseCases } from "./listStudent/listStudentUseCase";
import { ShowStudentUseCase } from "./showStudent/showStudentUseCase";
import { UpdateStudentsUseCase } from "./updateStudent/updateStudentUseCase";

@Module({
    imports: [
        RepositoriesModule,
    ],
    providers: [
        CreateStudentUseCases,
        ListStudentsUseCases,
        UpdateStudentsUseCase,
        ShowStudentUseCase,
    ],
    exports: [
        CreateStudentUseCases,
        ListStudentsUseCases,
        UpdateStudentsUseCase,
        ShowStudentUseCase,
    ]
})
export class DomainModule { }