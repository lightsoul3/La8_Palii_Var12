import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {

  constructor(private service: SharedService) { }

  studentList!: Student[];
  modalTitle!: string;
  activateAddStudentComponent!: boolean;
  student!: Student;

  ngOnInit(): void {
    this.getStudents();
  }

  addClick(){
    const currentDate = new Date();
    this.student = new Student(0,'','','',currentDate);
    this.modalTitle = "Add";
    this.activateAddStudentComponent = true;

  }

  closeClick(){
    this.activateAddStudentComponent = false;
    this.getStudents();
  }

  editClick(student: Student)
  {
    this.student=student;
    this.modalTitle="Edit";
    this.activateAddStudentComponent=true;
  }

  deleteClick(student: Student)
  {
    if(confirm("Do you want to delete?"))
    {
      this.service.deleteStudent(student.ID).subscribe(res=>{
        alert(res.toString());
        this.getStudents();
      });
      
    }
   
  }
  getStudents(){
    this.service.getStudentList().subscribe(data=>{
      this.studentList = data;
    })
  }

}
