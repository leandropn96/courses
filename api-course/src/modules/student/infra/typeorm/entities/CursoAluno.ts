import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'curso_aluno' })
export class CursoAluno {
    @PrimaryGeneratedColumn({ type: 'integer' })
    codigo: number;

    @Column({ type: "integer" })
    codigo_aluno: number;

    @Column({ type: 'integer' })
    codigo_curso: number;
}