import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Teacher } from './models/teacher';
import { Subject } from './models/subject';
import { Student } from './models/student';
import { Rating } from './models/rating';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:61290/api";


  constructor(private http:HttpClient) {}
  
  getTeacherList(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.APIUrl+'/teacher');
  }

  getTeacher(value: number): Observable<Teacher>{
    return this.http.get<Teacher>(this.APIUrl+`/teacher/${value}`);
  }

  addTeacher(value: Teacher){
    return this.http.post(this.APIUrl+'/teacher',value);
  }

  editTeacher(value: Teacher){
    return this.http.put(this.APIUrl+'/teacher',value);
  }

  deleteTeacher(value: number){
    return this.http.delete(this.APIUrl+`/teacher/${value}`);
  }



  getSubjectList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.APIUrl+'/subject');
  }

  getSubject(value: number): Observable<Subject>{
    return this.http.get<Subject>(this.APIUrl+`/subject/${value}`);
  }

  addSubject(value: Subject){
    return this.http.post(this.APIUrl+'/subject',value);
  }

  editSubject(value: Subject){
    return this.http.put(this.APIUrl+'/subject',value);
  }

  deleteSubject(value: number){
    return this.http.delete(this.APIUrl+`/subject/${value}`);
  }


  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.APIUrl+'/student');
  }

  getStudent(value: number): Observable<Student>{
    return this.http.get<Student>(this.APIUrl+`/student/${value}`);
  }

  addStudent(value: Student){
    return this.http.post(this.APIUrl+'/student',value);
  }

  editStudent(value: Student){
    return this.http.put(this.APIUrl+'/student',value);
  }

  deleteStudent(value: number){
    return this.http.delete(this.APIUrl+`/student/${value}`);
  }


  getRatingList(): Observable<Rating[]>{
    return this.http.get<Rating[]>(this.APIUrl+'/rating');
  }

  addRating(value: Rating){
    return this.http.post(this.APIUrl+'/rating', value);
  }

  deleteRating(value: number){
    return this.http.delete(this.APIUrl+`/rating/${value}`);
  }
}
