import * as path from 'path';
import { DataSource } from "typeorm";


const config = new DataSource({
    type: 'postgres',
    host: 'postgresDB',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'courses',
    entities: [
        path.resolve(__dirname,
            'src',
            'shared',
            'infra',
            'typeorm',
            'migrations')],
    synchronize: true,
    migrationsRun: true,
    logging: true,
    logger: 'file',
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],

});

export default config;
