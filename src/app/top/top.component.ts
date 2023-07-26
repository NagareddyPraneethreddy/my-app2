import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {

  public p:number=0;
  public t:number=0;

  public result:any=[];

  results(value:any){
    this.result=value;

  }
  
  
}
