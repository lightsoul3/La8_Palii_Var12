import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-subjects',
  templateUrl: './show-subjects.component.html',
  styleUrls: ['./show-subjects.component.css']
})
export class ShowSubjectsComponent implements OnInit {

  constructor(private service: SharedService) { }

  subjectList!: Subject[];
  modalTitle!:string;
  activateAddSubjectComponent!:boolean;
  subject!: Subject;


  ngOnInit(): void {
    this.getSubjects();
  }

  addClick(){
    const currentDate = new Date();
    this.subject= new Subject(0,'', 0);
    this.modalTitle = "Add";
    this.activateAddSubjectComponent = true;

  }

  closeClick(){
    this.activateAddSubjectComponent = false;
    this.getSubjects();
  }


  editClick(subject: Subject)
  {
    this.subject=subject;
    this.modalTitle="Edit";
    this.activateAddSubjectComponent=true;
  }

  deleteClick(subject: Subject)
  {
    if(confirm("Do you want to delete?"))
    {
      this.service.deleteSubject(subject.ID).subscribe(res=>{
        alert(res.toString());
        this.getSubjects();
      });
      
    }
   
  }

  getSubjects(){
    this.service.getSubjectList().subscribe(data=>{
      this.subjectList = data;
    })
  }

}
