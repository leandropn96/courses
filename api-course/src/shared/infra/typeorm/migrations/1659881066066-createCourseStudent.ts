import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createCourseStudent1659881066066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'course_students',
                schema: 'courses',
                columns: [
                    {
                        name: 'code',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'code_student',
                        type: 'int'
                    },
                    {
                        name: 'code_course',
                        type: 'int'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'StudentCode',
                        referencedSchema: 'students',
                        referencedTableName: 'students',
                        referencedColumnNames: ['code'],
                        columnNames: ['code_student'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'CourseCode',
                        referencedSchema: 'courses',
                        referencedTableName: 'courses',
                        referencedColumnNames: ['code'],
                        columnNames: ['code_course'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ]
            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses.course_students');
    }

}
