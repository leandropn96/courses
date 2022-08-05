import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn({ type: 'integer' })
    codigo: number;

    @Column({ type: "character varying", length: 50 })
    nome: string;

}