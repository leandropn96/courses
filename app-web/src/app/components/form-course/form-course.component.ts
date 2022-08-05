import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/models';
import { CourseHttpService } from 'src/app/services/course-http.service';

interface DaialogParams {
  codigo?: number,
  type_modal: 'add' | 'edit',
  descricao: string,
  ementa: string,
}

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent implements OnInit {
  descricao: string = ""
  ementa: string = ""


  constructor(
    private courseHTTP: CourseHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    if (this.params.type_modal === 'edit') {
      console.log(this.params)
      this.descricao = this.params.descricao
      this.ementa = this.params.ementa
    }

  }

  saveCourse() {
    this.courseHTTP.create({
      descricao: this.descricao,
      ementa: this.ementa
    })
    this.courseHTTP.list()
  }

  editCourse() {
    console.log(this.params)
    this.courseHTTP.update({
      codigo: Number(this.params.codigo),
      descricao: this.descricao,
      ementa: this.ementa
    }).subscribe(data => console.log(data))
    this.courseHTTP.list()
  }
}
