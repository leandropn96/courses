import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createStudent1659881055704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('students', true);
        await queryRunner.createTable(
            new Table({
                name: 'students',
                schema: 'students',
                columns: [
                    {
                        name: 'code',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        precision: 50,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students.students');
    }

}
