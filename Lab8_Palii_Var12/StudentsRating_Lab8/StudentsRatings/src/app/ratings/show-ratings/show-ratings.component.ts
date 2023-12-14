import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/models/rating';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-ratings',
  templateUrl: './show-ratings.component.html',
  styleUrls: ['./show-ratings.component.css']
})
export class ShowRatingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ratingList!: Rating[];
  modalTitle!: string;
  activateAddRatingComponent!: boolean;
  rating!: Rating;

  ngOnInit(): void {
    this.getRatingList();
  }

  addClick(){
    this.modalTitle="Add information";
    this.activateAddRatingComponent=true;
  }

  closeClick(){
    this.activateAddRatingComponent = false;
    this.getRatingList();
  }

  deleteClick(rating: Rating)
  {
    if(confirm("Do you want to delete?"))
    {
      this.service.deleteRating(rating.ID).subscribe(res=>{
        alert(res.toString());
        this.getRatingList();
      });
      
    }
   
  }
  getRatingList(){
    this.service.getRatingList().subscribe(data=>{
      this.ratingList = data;
    })
  }

}
