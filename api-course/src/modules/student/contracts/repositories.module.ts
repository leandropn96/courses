import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentRepository } from "../infra/typeorm/repositories/StudentRepository";

import { Student } from "../infra/typeorm/entities/Student";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [
    {
      provide: 'StudentRepository',
      inject: [StudentRepository],
      useClass: StudentRepository,
    }

  ],
  exports: [
    {
      provide: 'StudentRepository',
      inject: [StudentRepository],
      useClass: StudentRepository,
    }
  ]
})
export class RepositoriesModule { }
