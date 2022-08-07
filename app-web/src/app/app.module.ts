import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { NavBarComponent } from './components/general/nav-bar/nav-bar.component';
import { CourseComponent } from './components/courses/course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormCourseComponent } from './components/courses/form-course/form-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/students/student/student.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeleteCourseComponent } from './components/courses/delete-course/delete-course.component';
import { FormStudentsComponent } from './components/students/form-students/form-students.component';
import { DeleteStudentComponent } from './components/students/delete-student/delete-student.component';
import { CourseStudentsComponent } from './components/courses/course-students/course-students.component';
import { FormStudentsCourseComponent } from './components/courses/form-students-course/form-students-course.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavBarComponent,
    CourseComponent,
    FormCourseComponent,
    StudentComponent,
    DeleteCourseComponent,
    FormStudentsComponent,
    DeleteStudentComponent,
    CourseStudentsComponent,
    FormStudentsCourseComponent,

  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: 'courses', component: CourseComponent },
        { path: 'students', component: StudentComponent },
        { path: 'course-students/:code_course', component: CourseStudentsComponent }
      ]
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
