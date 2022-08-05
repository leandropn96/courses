import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentHttpService } from 'src/app/services/student-http.service';

interface DaialogParams {
  codigo?: number,
  type_modal: 'add' | 'edit',
  nome: string,
}

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent implements OnInit {

  nome: string = ""

  constructor(
    private courseHTTP: StudentHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    if (this.params.type_modal === 'edit') {
      this.nome = this.params.nome
    }

  }

  saveCourse() {
    this.courseHTTP.create({
      nome: this.nome
    }).subscribe(data => console.log(data))
    this.courseHTTP.list()
  }

  editCourse() {
    console.log(this.params)
    this.courseHTTP.update({
      codigo: Number(this.params.codigo),
      nome: this.nome
    }).subscribe(data => console.log(data))
    this.courseHTTP.list()
  }

}
