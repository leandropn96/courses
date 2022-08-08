import { Module } from "@nestjs/common";
import { RepositoriesModule } from "../contracts/repositories.module";
import { CreateCoursesUseCases } from "./createCourse/createCurseUseCase";
import { ListCoursesUseCases } from "./listCourse/listCurseUseCase";
import { ShowCourseUseCase } from "./showCourse/showCurseUseCase";
import { UpdateCourseUseCase } from "./updateCourse/updateCurseUseCase";
import { DeleteCourseUseCase } from "./deleteCourse/deleteCurseUseCase";
import { AddStudentCoursesUseCases } from "./addStudentCourse/createaddStudentCurseUseCase"
import { ListStudentCoursesUseCases } from "./listStudentCourse/listddStudentCurseUseCase";

@Module({
    imports: [
        RepositoriesModule,
    ],
    providers: [
        CreateCoursesUseCases,
        ListCoursesUseCases,
        UpdateCourseUseCase,
        ShowCourseUseCase,
        DeleteCourseUseCase,
        AddStudentCoursesUseCases,
        ListStudentCoursesUseCases,
    ],
    exports: [
        ListCoursesUseCases,
        CreateCoursesUseCases,
        UpdateCourseUseCase,
        ShowCourseUseCase,
        DeleteCourseUseCase,
        AddStudentCoursesUseCases,
        ListStudentCoursesUseCases,
    ]
})
export class DomainModule { }