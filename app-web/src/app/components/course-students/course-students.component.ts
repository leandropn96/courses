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

  codigo_curso: number = 0

  constructor(
    public courseStudentHTTP: CourseHttpService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.codigo_curso = Number(routeParams.get('codigo_curso'));
    this.courseStudentHTTP.listStudentCourse(this.codigo_curso, '')
  }

  openDialog() {
    this.dialog.open(FormStudentsCourseComponent, {
      data: {
        type_modal: 'add',
        codigo_curso: this.codigo_curso
      }
    });
  }
  openDialogEdit(codigo: number, nome: string) {
    this.dialog.open(FormStudentsCourseComponent, {
      data: {
        codigo,
        nome,
        type_modal: 'edit',
      }
    });
  }
}
