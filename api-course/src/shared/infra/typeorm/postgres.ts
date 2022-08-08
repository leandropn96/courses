import * as path from 'path';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const postgres: TypeOrmModuleOptions = {
    name: 'postgres',
    type: 'postgres',
    port: 5432,
    host: 'postgresDB',
    username: 'postgres',
    password: 'password',
    database: 'courses',
    entities: [path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'modules',
        '**',
        'infra',
        'typeorm',
        'entities',
        '*',
    ),
    ],
    synchronize: false,
    migrations: [path.resolve(__dirname, 'migrations', '*')],
    logging: ['error', 'warn']
};