import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

public actions:any={};

  constructor(private activityService:ActivityService){

    this.activityService.getactions().subscribe(
      (data:any)=>{
        this.actions=data;
      },
      (err:any)=>{
        alert("Internal server problem")
      }

    )

    
  }
  reload(){
    this.activityService.getactions().subscribe(
      (data:any)=>{
        this.actions=data;
      },
      (err:any)=>{
        alert("Internal server problem")
      }

    

    )}

}
