import { Aluno } from 'src/modules/student/infra/typeorm/entities/Aluno';
import { CursoAluno } from 'src/modules/student/infra/typeorm/entities/CursoAluno';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from './Course';

@Entity({ name: 'curso_aluno' })
export class StudentsCourse {
    @PrimaryGeneratedColumn({ type: 'integer' })
    codigo: number;

    @Column({ type: "integer" })
    codigo_aluno: number;

    @Column({ type: 'integer' })
    codigo_curso: number;

    @ManyToOne(() => Aluno)
    @JoinColumn({ name: 'codigo_aluno', referencedColumnName: 'codigo' })
    aluno: Aluno;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'codigo_curso', referencedColumnName: 'codigo' })
    course: Course;
}