import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.scss']
})
export class FlipkartComponent {

    public colors:any=[];

    constructor(private flipkartSerivce:FlipkartService){

      this.flipkartSerivce.getcolors().subscribe(
        (data:any)=>{
          this.colors=data;
        },
        (err:any)=>{
          alert("Interal server error")
        }
      )
    }
    reload(){
      
      this.flipkartSerivce.getcolors().subscribe(
        (data:any)=>{
          this.colors=data;
        },
        (err:any)=>{
          alert("Interal server error")
        }
    )}
}
