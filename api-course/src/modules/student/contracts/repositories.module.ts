import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentRepository } from "../infra/typeorm/repositories/StudentRepository";

import { Aluno } from "../infra/typeorm/entities/Aluno";

@Module({
  imports: [
    TypeOrmModule.forFeature([Aluno]),
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
