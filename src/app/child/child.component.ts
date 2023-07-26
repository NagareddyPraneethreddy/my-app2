import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() public ac:string="";
  @Input() public bc:number=0;
  constructor(){}

  public add:string="";
  
  @Output()public bEvent:EventEmitter<any>= new EventEmitter();

  send(){
    this.bEvent.emit(this.add);
  }


}
