import { BaseEntity } from 'src/shared/infra/typeorm/BaseEntity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: "courses", name: 'courses' })
export class Course extends BaseEntity {
    @Column({ type: "character varying", length: 50 })
    description: string;

    @Column({ type: 'text' })
    menu: string;
}