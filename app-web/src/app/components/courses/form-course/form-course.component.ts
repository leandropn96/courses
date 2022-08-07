import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseHttpService } from 'src/app/services/course-http.service';

interface DaialogParams {
  code?: number,
  type_modal: 'add' | 'edit',
  description: string,
  menu: string,
}

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent implements OnInit {
  description: string = ""
  menu: string = ""


  constructor(
    private courseHTTP: CourseHttpService,
    @Inject(MAT_DIALOG_DATA)
    public params: DaialogParams
  ) { }

  ngOnInit(): void {
    if (this.params.type_modal === 'edit') {
      console.log(this.params)
      this.description = this.params.description
      this.menu = this.params.menu
    }

  }

  saveCourse() {
    this.courseHTTP.create({
      description: this.description,
      menu: this.menu
    })
    this.courseHTTP.list()
  }

  editCourse() {
    console.log(this.params)
    this.courseHTTP.update({
      code: Number(this.params.code),
      description: this.description,
      menu: this.menu
    })
    this.courseHTTP.list()
  }
}
