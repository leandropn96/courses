import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { StudentHttpService } from 'src/app/services/student-http.service';

interface DaialogParams {
  codigo?: number,
  type_modal: 'add' | 'edit',
  codigo_curso: number,
}

@Component({
  selector: 'app-form-students-course',
  templateUrl: './form-students-course.component.html',
  styleUrls: ['./form-students-course.component.css']
})
export class FormStudentsCourseComponent implements OnInit {

  codigo_aluno: number = 0
  codigo_curso: number = 0


  constructor(
    public courseHTTP: CourseHttpService,
    public studentHttpService: StudentHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    this.codigo_curso = this.params.codigo_curso
  }

  saveStudentCourse() {
    console.log(this.codigo_aluno)
    this.courseHTTP.addStudentCourse({
      codigo_aluno: this.codigo_aluno,
      codigo_curso: this.codigo_curso
    })
    this.courseHTTP.listStudentCourse(this.codigo_curso, '')
  }
}
