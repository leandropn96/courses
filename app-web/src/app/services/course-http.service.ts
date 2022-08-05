import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, CreateCourse, CreateStudentCourse, ListStudentCourse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {
  courses: Course[] = [];
  course_students: ListStudentCourse[] = [];

  constructor(
    private http: HttpClient
  ) { }

  create(data: CreateCourse) {
    this.http.post<Course>('http://localhost:3000/courses', data);
  }

  list() {
    const res = this.http.get<Course[]>('http://localhost:3000/courses');
    res.subscribe((data) => { this.courses = data })

  }

  update({ codigo, descricao, ementa }: Course): Observable<boolean> {
    return this.http.put<boolean>(`http://localhost:3000/courses/${codigo}`, { descricao, ementa });
  }

  delete(codigo: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/courses/${codigo}`);
  }

  addStudentCourse(data: CreateStudentCourse) {
    this.http.post<void>('http://localhost:3000/courses/add/student', data);
  }

  listStudentCourse(codigo_curso: number, nome?: string) {
    const res = this.http.get<ListStudentCourse[]>(`http://localhost:3000/courses/${codigo_curso}/list/student?nome=${nome}`);
    res.subscribe((data) => { this.course_students = data })
  }
}
