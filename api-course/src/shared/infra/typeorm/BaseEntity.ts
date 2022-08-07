import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn({ type: 'integer' })
    code: number;

    @Column({ type: 'timestamp without time zone' })
    created_at: Date;

    @Column({ type: 'timestamp without time zone' })
    updated_at?: Date;

    constructor() {
        if (!this.code) {
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }
}