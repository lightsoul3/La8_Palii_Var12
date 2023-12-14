import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() teacher!: Teacher;
  ID!: number;
  Name!: string;

  ngOnInit(): void {
    this.ID = this.teacher.ID;
    this.Name = this.teacher.Name;
  }

  addTeacher() {
    var teacher = new Teacher(0, this.Name)
    this.service.addTeacher(teacher).subscribe(res => {
      alert(res.toString());
    });
  }

  editTeacher() {
    var teacher = new Teacher(this.ID, this.Name)
    this.service.editTeacher(teacher).subscribe(res => {
      alert(res.toString());
    });
  }

}
