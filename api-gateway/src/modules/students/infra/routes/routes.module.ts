import { Module } from "@nestjs/common";
import { StudentsController } from "./students.routes";

@Module({
    controllers: [
        StudentsController
    ]
})
export class RoutesModule { }