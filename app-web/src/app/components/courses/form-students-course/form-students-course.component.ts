import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { StudentHttpService } from 'src/app/services/student-http.service';

interface DaialogParams {
  code?: number,
  type_modal: 'add' | 'edit',
  code_course: number,
}

@Component({
  selector: 'app-form-students-course',
  templateUrl: './form-students-course.component.html',
  styleUrls: ['./form-students-course.component.css']
})
export class FormStudentsCourseComponent implements OnInit {

  code_student: number = 0
  code_course: number = 0


  constructor(
    public courseHTTP: CourseHttpService,
    public studentHttpService: StudentHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    this.code_course = this.params.code_course
    this.studentHttpService.list()
  }

  saveStudentCourse() {
    this.courseHTTP.addStudentCourse({
      code_student: Number(this.code_student),
      code_course: this.code_course
    })
    this.courseHTTP.listStudentCourse(this.code_course, '').subscribe((data) => { this.courseHTTP.course_students = data })
  }
}
