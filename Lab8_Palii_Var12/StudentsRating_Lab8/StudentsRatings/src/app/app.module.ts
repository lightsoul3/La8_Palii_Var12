import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ShowTeachersComponent } from './teachers/show-teachers/show-teachers.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { ShowSubjectsComponent } from './subjects/show-subjects/show-subjects.component';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { ShowStudentsComponent } from './students/show-students/show-students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { ShowRatingsComponent } from './ratings/show-ratings/show-ratings.component';
import { AddRatingComponent } from './ratings/add-rating/add-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    SubjectsComponent,
    StudentsComponent,
    RatingsComponent,
    ShowRatingsComponent, 
    ShowStudentsComponent,
    ShowSubjectsComponent, 
    ShowSubjectsComponent, 
    ShowTeachersComponent, 
    AddRatingComponent,
    AddStudentComponent, 
    AddSubjectComponent, 
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
