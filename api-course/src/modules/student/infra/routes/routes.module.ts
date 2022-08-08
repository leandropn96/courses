import { Module } from "@nestjs/common";
import { DomainModule } from "../../useCases/domain.module";
import { StudentController } from "./student.routes";

@Module({
    imports: [
        DomainModule
    ],
    controllers: [
        StudentController,
    ]
})

export class RoutesModule { }