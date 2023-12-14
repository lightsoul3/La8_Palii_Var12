import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Rating } from 'src/app/models/rating';
import { Student } from 'src/app/models/student';
import { Teacher } from 'src/app/models/teacher';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
export class AddRatingComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input()
  StudentID!: number;
  TeacherID!: number;
  SubjectID!: number;
  Month!: string;
  CurrentRating!: number;
  StudentList!: Student[];
  SubjectList!: Subject[];
  TeacherList!: Teacher[];

  ngOnInit(): void {
    this.service.getTeacherList().subscribe(data => {
      this.TeacherList = data;
    })
    this.service.getStudentList().subscribe(data => {
      this.StudentList = data;
    })
    this.service.getSubjectList().subscribe(data => {
      this.SubjectList = data;
    })
  }

  addRating() {
    this.service.getStudent(this.StudentID).subscribe(student => {

      this.service.getSubject(this.SubjectID).subscribe(subject => {
        this.service.getTeacher(this.TeacherID).subscribe(teacher => {

          var rating = new Rating(0, this.StudentID, student, this.SubjectID, subject, this.Month, this.CurrentRating, this.TeacherID, teacher)
          this.service.addRating(rating).subscribe(res => {
            alert(res.toString());
          })

        })

      });

    });
  }

}
