import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CourseComponent } from './components/course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormCourseComponent } from './components/form-course/form-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { FormStudentsComponent } from './components/form-students/form-students.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { FormStudentsCourseComponent } from './components/form-students-course/form-students-course.component';
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
        { path: 'course-students/:codigo_curso', component: CourseStudentsComponent }
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
