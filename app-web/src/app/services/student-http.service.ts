import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, CreateStudent } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
  students: Student[] = [];

  constructor(
    private http: HttpClient
  ) { }

  create(data: CreateStudent): Observable<Student> {
    console.log(data)
    return this.http.post<Student>('http://localhost:3000/students', data);
  }

  list() {
    const res = this.http.get<Student[]>('http://localhost:3000/students');
    res.subscribe((data) => { this.students = data })
    console.log(this.students)

  }

  update({ code, name }: Student) {
    this.http.put<boolean>(`http://localhost:3000/students/${code}`, { name }).subscribe();
  }

  delete(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3000/students/${code}`);
  }
}
