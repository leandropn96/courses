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
    this.http.post<Course>('http://localhost:3000/courses', data).subscribe()
  }

  list() {
    const res = this.http.get<Course[]>('http://localhost:3000/courses');
    res.subscribe((data) => { this.courses = data })

  }

  update({ code, description, menu }: Course) {
    this.http.put<boolean>(`http://localhost:3000/courses/${code}`, { description, menu }).subscribe();
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/courses/${code}`);
  }

  addStudentCourse(data: CreateStudentCourse) {
    this.http.post('http://localhost:3000/courses/add/student', data).subscribe()
  }

  listStudentCourse(code_course: number, name?: string) {
    return this.http.get<ListStudentCourse[]>(`http://localhost:3000/courses/${code_course}/list/student?nome=${name}`);
  }
}
