import { Module } from '@nestjs/common';
import { CourseModule } from './modules/course/course.module';
import { StudentModule } from './modules/student/student.module';
import { DatabaseModule } from './shared/infra/typeorm/database.module';

@Module({
  imports: [
    CourseModule,
    StudentModule,
    DatabaseModule,
  ],
})
export class AppModule { }
