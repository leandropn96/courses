import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { ActivatedRoute } from '@angular/router';
import { FormStudentsCourseComponent } from '../form-students-course/form-students-course.component';

@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.css']
})
export class CourseStudentsComponent implements OnInit {

  code_course: number = 0

  constructor(
    public courseStudentHTTP: CourseHttpService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.code_course = Number(routeParams.get('code_course'));
    this.courseStudentHTTP.listStudentCourse(this.code_course, '').subscribe(data => this.courseStudentHTTP.course_students = data)
  }

  openDialog() {
    this.dialog.open(FormStudentsCourseComponent, {
      data: {
        type_modal: 'add',
        code_course: this.code_course
      }
    });
  }
  openDialogEdit(code: number, name: string) {
    this.dialog.open(FormStudentsCourseComponent, {
      data: {
        code,
        name,
        type_modal: 'edit',
      }
    });
  }
}
