import { Student } from 'src/modules/student/infra/typeorm/entities/Student';
import { BaseEntity } from 'src/shared/infra/typeorm/BaseEntity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Course } from './Course';

@Entity({ schema: "courses", name: 'course_students' })
export class StudentsCourse extends BaseEntity {
    @Column({ type: "integer" })
    code_student: number;

    @Column({ type: 'integer' })
    code_course: number;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'code_student', referencedColumnName: 'code' })
    student: Student;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'code_course', referencedColumnName: 'code' })
    course: Course;
}