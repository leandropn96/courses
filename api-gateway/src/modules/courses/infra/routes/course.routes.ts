import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Client, ClientKafka, Transport } from '@nestjs/microservices'
import { Partitioners } from "kafkajs";
import { Observable } from "rxjs";
import { topics } from "src/shared/functions/topics";
import { ICreateCourse } from "../../dtos/ICreateCourse.DTO";
import { ICreateStudentCourse } from "../../dtos/ICreateStudentCourse.DTO";
import { Course } from "../../dtos/IListCourse.DTO";
import { StudentCourse } from "../../dtos/IListStudentCourse.DTO";

@Controller('courses')
export class CourseController {

    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['localhost:9093']
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
    createCurse(@Body() data: ICreateCourse) {
        this.client.send('create-course', {
            message: data
        })
    }

    @Get()
    listCourse(): Observable<Course[]> {
        return this.client.send<Course[]>('list-course', {
            message: {}
        })
    }

    @Get(':codigo')
    show(@Param('codigo') codigo: string): Observable<Course> {
        return this.client.send<Course>('show-course', {
            message: Number(codigo)
        })
    }

    @Put(':codigo')
    update(
        @Param('codigo') codigo: string,
        @Body() data: ICreateCourse
    ) {
        this.client.send('update-course', {
            message: { ...data, codigo: Number(codigo) }
        })
    }

    @Delete(':codigo')
    delete(
        @Param('codigo') codigo: string
    ) {
        this.client.send('delete-course', {
            message: { codigo: Number(codigo) }
        })
    }

    @Post('add/student')
    addStudentCourse(@Body() data: ICreateStudentCourse) {
        this.client.send('create-student-course', {
            message: data
        })
    }

    @Get(':codigo_curso/list/student')
    listStudentCourse(
        @Param('codigo_curso') codigo_curso: number,
        @Query('nome') nome: string
    ): Observable<StudentCourse[]> {
        return this.client.send<StudentCourse[]>('list-student-course', {
            message: {
                codigo_curso,
                nome
            }
        })
    }
}