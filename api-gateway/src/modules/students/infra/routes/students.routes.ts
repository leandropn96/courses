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
                brokers: ['localhost:9093']
            },
            consumer: {
                groupId: 'course'
            },
            producer: {
                createPartitioner: Partitioners.LegacyPartitioner
            }
        }
    })
    client: ClientKafka

    async onModuleInit() {
        console.log("chamou sim")
        Object.values(topics).forEach((microService) => {
            this.client.subscribeToResponseOf(microService);
        });
        await this.client.connect();
    }

    @Post()
    createCurse(@Body() data: ICreateStudentDTO) {
        this.client.send('create-student', {
            message: data
        })
    }

    @Get()
    listCourse() {
        return this.client.send('list-student', {
            message: {}
        })
    }

    @Get(':codigo')
    show(@Param('codigo') codigo: string) {
        const curso = this.client.send('show-student', {
            message: Number(codigo)
        })
        return curso
    }

    @Put(':codigo')
    update(
        @Param('codigo') codigo: string,
        @Body() data: ICreateStudentDTO
    ) {
        this.client.send('update-student', {
            message: { ...data, codigo: Number(codigo) }
        })
    }

    @Delete(':codigo')
    delete(
        @Param('codigo') codigo: string
    ) {
        this.client.send('delete-student', {
            message: { codigo: Number(codigo) }
        })
    }
}