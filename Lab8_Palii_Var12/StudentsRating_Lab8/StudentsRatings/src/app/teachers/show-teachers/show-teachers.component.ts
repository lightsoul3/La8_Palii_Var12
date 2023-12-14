import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-teachers',
  templateUrl: './show-teachers.component.html',
  styleUrls: ['./show-teachers.component.css']
})
export class ShowTeachersComponent implements OnInit {

  constructor(private service: SharedService) { }

  teacherList!: Teacher[];
  modalTitle!:string;
  activateAddTeacherComponent!:boolean;
  teacher!: Teacher;


  ngOnInit(): void {
    this.getTeachers();
  }

  addClick(){
    const currentDate = new Date();
    this.teacher = new Teacher(0,'');
    this.modalTitle = "Add";
    this.activateAddTeacherComponent = true;

  }

  closeClick(){
    this.activateAddTeacherComponent = false;
    this.getTeachers();
  }


  editClick(teacher: Teacher)
  {
    this.teacher=teacher;
    this.modalTitle="Edit";
    this.activateAddTeacherComponent=true;
  }

  deleteClick(teacher: Teacher)
  {
    if(confirm("Do you want to delete?"))
    {
      this.service.deleteTeacher(teacher.ID).subscribe(res=>{
        alert(res.toString());
        this.getTeachers();
      });
      
    }
   
  }

  getTeachers(){
    this.service.getTeacherList().subscribe(data=>{
      this.teacherList = data;
    })
  }

}
