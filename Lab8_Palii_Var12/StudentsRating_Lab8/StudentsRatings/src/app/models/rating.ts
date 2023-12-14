
import { Student } from "./student";
import { Subject } from "./subject";
import { Teacher } from "./teacher";

export class Rating{
    ID!: number;
    StudentID!: number;
    Student!: Student;
    SubjectID!: number;
    Subject!: Subject;
    Month!: string;
    CurrentRating!: number;
    TeacherID!: number;
    Teacher!: Teacher;

    constructor(ID:number, StudentID:number, Student:Student, SubjectID:number, Subject:Subject,
        Month:string, CurrentRating:number, TeacherID:number, Teacher:Teacher){

        this.ID = ID;
        this.StudentID = StudentID;
        this.Student = Student;
        this.SubjectID = SubjectID;
        this.Subject = Subject;
        this.Month = Month;
        this.CurrentRating = CurrentRating;
        this.TeacherID = TeacherID;
        this.Teacher = Teacher;
    }
}