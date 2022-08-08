import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/models';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { DeleteCourseComponent } from '../../courses/delete-course/delete-course.component';
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
  openDialogEdit(code: number, name: string) {
    this.dialog.open(FormStudentsComponent, {
      data: {
        code,
        name,
        type_modal: 'edit',
      }
    });
  }

  openDialogDelete(code: number) {
    this.dialog.open(DeleteCourseComponent, {
      data: {
        code
      }
    });
  }
}
