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
                brokers: ['kafka:9092']
            },
            consumer: {
                groupId: 'courses'
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
        }).subscribe()
    }

    @Get()
    listCourse(): Observable<Course[]> {
        return this.client.send<Course[]>('list-course', {
            message: {}
        })
    }

    @Get(':code')
    show(@Param('code') code: string): Observable<Course> {
        return this.client.send<Course>('show-course', {
            message: Number(code)
        })
    }

    @Put(':code')
    update(
        @Param('code') code: string,
        @Body() data: ICreateCourse
    ) {
        this.client.send('update-course', {
            message: { ...data, code: Number(code) }
        }).subscribe()
    }

    @Delete(':code')
    delete(
        @Param('code') code: string
    ) {
        this.client.send('delete-course', {
            message: { codigo: Number(code) }
        })
    }

    @Post('add/student')
    addStudentCourse(@Body() data: ICreateStudentCourse) {
        console.log(data)
        this.client.send('create-student-course', {
            message: data
        }).subscribe()
    }

    @Get(':code_course/list/student')
    listStudentCourse(
        @Param('code_course') code_course: number,
        @Query('name') name: string
    ): Observable<StudentCourse[]> {
        console.log(code_course, name)
        return this.client.send<StudentCourse[]>('list-student-course', {
            message: {
                code_course,
                name
            }
        })
    }
}