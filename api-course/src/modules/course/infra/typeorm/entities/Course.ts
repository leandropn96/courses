import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'curso' })
export class Course {
    @PrimaryGeneratedColumn({ type: 'integer' })
    codigo: number;

    @Column({ type: "character varying", length: 50 })
    descricao: string;

    @Column({ type: 'text' })
    ementa: string;

}