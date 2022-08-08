import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Client, ClientKafka, Transport } from '@nestjs/microservices'
import { Partitioners } from "kafkajs";
import { topics } from "src/shared/functions/topics";
import { ICreateStudentDTO } from "../../dtos/ICreateStudente.DTO";

@Controller('students')
export class StudentsController {

    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['kafka:9092'],
            },
            consumer: {
                groupId: 'students'
            },
            producer: {
                createPartitioner: Partitioners.LegacyPartitioner
            }
        }
    })
    client: ClientKafka

    async onModuleInit() {
        Object.values(topics).forEach((microService) => {
            this.client.subscribeToResponseOf(microService);
        });
        await this.client.connect();
    }

    @Post()
    createCurse(@Body() data: ICreateStudentDTO) {
        this.client.send('create-student', {
            message: data
        }).subscribe()
    }

    @Get()
    listCourse() {
        return this.client.send('list-student', {
            message: {}
        })
    }

    @Get(':code')
    show(@Param('code') code: string) {
        const course = this.client.send('show-student', {
            message: Number(code)
        })
        return course
    }

    @Put(':code')
    update(
        @Param('code') code: string,
        @Body() data: ICreateStudentDTO
    ) {
        console.log(data, code)
        this.client.send('update-student', {
            message: { ...data, code: Number(code) }
        }).subscribe()
    }

    @Delete(':code')
    delete(
        @Param('code') code: string
    ) {
        this.client.send('delete-student', {
            message: { code: Number(code) }
        })
    }
}