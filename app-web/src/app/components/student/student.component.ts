import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/models';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';
import { FormStudentsComponent } from '../form-students/form-students.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = []

  constructor(
    public courseHTTP: StudentHttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.courseHTTP.list()
  }

  openDialog() {
    this.dialog.open(FormStudentsComponent, {
      data: { type_modal: 'add' }
    });
  }
  openDialogEdit(codigo: number, nome: string) {
    this.dialog.open(FormStudentsComponent, {
      data: {
        codigo,
        nome,
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
}
