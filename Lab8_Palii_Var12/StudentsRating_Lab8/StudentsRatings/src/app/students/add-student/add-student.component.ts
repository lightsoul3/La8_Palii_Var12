import { Component, OnInit, Input} from '@angular/core';
import { Student } from 'src/app/models/student';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() student!: Student;
  ID!: number;
  Fullname!: string;
  Address!: string;
  Phone!: string;
  DateOfBirth!: Date;

  ngOnInit(): void {
    this.ID = this.student.ID;
    this.Fullname = this.student.Fullname;
    this.Address = this.student.Address;
    this.Phone = this.student.Phone;
    this.DateOfBirth = this.student.DateOfBirth;
  }

  addStudent() {
    var student = new Student(0, this.Fullname, this.Address, this.Phone, this.DateOfBirth)
    this.service.addStudent(student).subscribe(res => {
      alert(res.toString());
    });
  }

  editStudent() {
    var student = new Student(this.ID, this.Fullname, this.Address, this.Phone, this.DateOfBirth)
    this.service.editStudent(student).subscribe(res => {
      alert(res.toString());
    });
  }

}
