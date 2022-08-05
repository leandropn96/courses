import { Module } from "@nestjs/common";
import { CourseController } from "./course.routes";

@Module({
    controllers: [
        CourseController
    ]
})
export class RoutesModule { }