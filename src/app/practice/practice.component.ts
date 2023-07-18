import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {

  public kings:any=[];
  public ramu:any="";
  public somu:any="";
  public ramesh:any="";
  public suresh:any="";

  constructor(private practiceService:PracticeService){

    this.practiceService.getkings().subscribe(
      (data:any)=>{
        this.kings=data;
      },
      (err:any)=>{
        alert("Your are a Slave")
      }

    )
  }
  getSortKing(){ 
    this.practiceService.getSortking(this.ramu,this.somu).subscribe(
      (data:any)=>{
        this.kings=data;
      },
      (err:any)=>{
        alert("Your are a Slave")
      }

    )
  }
  getFilterKing(){ 
    this.practiceService.getFilterking(this.ramesh,this.suresh).subscribe(
      (data:any)=>{
        this.kings=data;
      },
      (err:any)=>{
        alert("Your are a Slave")
      }

    )
  }


}
