import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { postgres } from "./postgres";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [() => ({
                postgres,
                app: {
                    port: process.env.APP_PORT
                }
            })],
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) =>
                config.get<TypeOrmModuleOptions>('postgres'),
        }),
    ]
})
export class DatabaseModule { }