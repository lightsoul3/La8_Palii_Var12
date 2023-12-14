import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input () subject!: Subject;
  ID!: number;
  Name!: string;
  Rating!: number;

  ngOnInit(): void {
    this.ID = this.subject.ID;
    this.Name = this.subject.Name;
    this.Rating = this.subject.Rating;
  }

  addSubject(){
    var subject = new Subject(0, this.Name, this.Rating)
    this.service.addSubject(subject).subscribe(res=>{
      alert(res.toString());
    });
  }

  editSubject(){
    var subject = new Subject(this.ID, this.Name, this.Rating)
    this.service.editSubject(subject).subscribe(res=>{
      alert(res.toString());
    });
  }

}
