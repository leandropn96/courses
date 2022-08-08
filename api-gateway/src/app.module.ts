import { Module } from '@nestjs/common';
import { CourseModule } from './modules/courses/course.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    CourseModule,
    StudentsModule,
  ],

})
export class AppModule { }
