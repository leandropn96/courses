import { Module } from "@nestjs/common";
import { DomainModule } from "../../useCases/domain.module";
import { CourseController } from "./course.routes";

@Module({
    imports: [
        DomainModule
    ],
    controllers: [
        CourseController
    ]
})

export class RoutesModule { }