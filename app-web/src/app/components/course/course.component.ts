import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/models';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { MatDialog } from '@angular/material/dialog';
import { FormCourseComponent } from "../form-course/form-course.component";
import { DeleteCourseComponent } from "../delete-course/delete-course.component"


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = []

  constructor(
    public courseHTTP: CourseHttpService,
    public dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(FormCourseComponent, {
      data: { type_modal: 'add' }
    });
  }
  openDialogEdit(codigo: number, descricao: string, ementa: string) {
    this.dialog.open(FormCourseComponent, {
      data: {
        codigo,
        descricao,
        ementa,
        type_modal: 'edit',
      }
    });
  }

  openDialogDelete(codigo: number) {
    this.dialog.open(DeleteCourseComponent, {
      data: {
        codigo
      }
    });
  }

  ngOnInit() {
    this.courseHTTP.list()
  }
}
