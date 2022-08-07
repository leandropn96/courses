import { BaseEntity } from 'src/shared/infra/typeorm/BaseEntity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: "students", name: "students" })
export class Student extends BaseEntity {
    @Column({ type: "character varying", length: 50 })
    name: string;
}