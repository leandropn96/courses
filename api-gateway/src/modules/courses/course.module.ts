import { Module } from "@nestjs/common";
import { RoutesModule } from "./infra/routes/course.module";

@Module({
    imports: [
        RoutesModule,
    ]
})
export class CourseModule { }