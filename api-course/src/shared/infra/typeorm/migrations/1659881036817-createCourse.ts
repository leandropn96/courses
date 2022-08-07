import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createCourse1659881036817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('courses', true);
        await queryRunner.createTable(
            new Table({
                name: 'courses',
                schema: 'courses',
                columns: [
                    {
                        name: 'code',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        precision: 50,
                    },
                    {
                        name: 'menu',
                        type: 'text'
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
        await queryRunner.dropTable('courses.courses');
    }

}
