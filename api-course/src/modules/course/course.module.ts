import { Module } from "@nestjs/common";
import { RoutesModule } from "./infra/routes/routes.module";

@Module({
    imports: [
        RoutesModule
    ]
})

export class CourseModule { }