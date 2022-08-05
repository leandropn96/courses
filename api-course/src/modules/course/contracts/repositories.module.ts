import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseRepository } from "../infra/typeorm/repositories/CourseRepository";
import { StudentCourseRepository } from "../infra/typeorm/repositories/StudentCourseRepository"

import { Course } from "../infra/typeorm/entities/Course";
import { StudentsCourse } from "../infra/typeorm/entities/CursoAluno";

@Module({
  imports: [
    TypeOrmModule.forFeature([Course, StudentsCourse]),
  ],
  providers: [
    {
      provide: 'CourseRepository',
      inject: [CourseRepository],
      useClass: CourseRepository,
    },
    {
      provide: 'StudentCourseRepository',
      inject: [StudentCourseRepository],
      useClass: StudentCourseRepository,
    }

  ],
  exports: [
    {
      provide: 'CourseRepository',
      inject: [CourseRepository],
      useClass: CourseRepository,
    },
    {
      provide: 'StudentCourseRepository',
      inject: [StudentCourseRepository],
      useClass: StudentCourseRepository,
    }
  ]
})
export class RepositoriesModule { }
