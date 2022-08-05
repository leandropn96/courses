import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseHttpService } from 'src/app/services/course-http.service';

interface DeleteParams {
  codigo: number
}

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  constructor(
    private courseHTTP: CourseHttpService,
    @Inject(MAT_DIALOG_DATA)
    public data: DeleteParams
  ) { }

  ngOnInit(): void {
  }

  deleteCourse() {
    console.log(this.data.codigo)
    this.courseHTTP.delete(this.data.codigo).subscribe(data => console.log(data))
    this.courseHTTP.list()
  }

}
