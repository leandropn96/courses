import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentHttpService } from 'src/app/services/student-http.service';

interface DaialogParams {
  code?: number,
  type_modal: 'add' | 'edit',
  name: string,
}

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent implements OnInit {

  name: string = ""

  constructor(
    private courseHTTP: StudentHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    if (this.params.type_modal === 'edit') {
      this.name = this.params.name
    }

  }

  saveStudent() {
    this.courseHTTP.create({
      name: this.name
    }).subscribe(data => console.log(data))
    this.courseHTTP.list()
  }

  editStudent() {
    console.log(this.params)
    this.courseHTTP.update({
      code: Number(this.params.code),
      name: this.name
    })
    this.courseHTTP.list()
  }

}
