import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { RatingsComponent } from './ratings/ratings.component';


const routes: Routes = [
  {path: 'teachers', component:TeachersComponent},
  {path: 'subjects', component:SubjectsComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'ratings', component:RatingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
