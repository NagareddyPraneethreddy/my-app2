import { Component } from '@angular/core';

@Component({
  selector: 'app-calaculator2',
  templateUrl: './calaculator2.component.html',
  styleUrls: ['./calaculator2.component.scss']
})
export class Calaculator2Component {
public num1:number=0;
public num2:number=0;
public result:number=0;

add(){
  this.result=this.num1+this.num2;
}
sub(){
 this.result=this.num1-this.num2;
}
mul(){
  this.result=this.num1*this.num2;
}
div(){
  this.result=this.num1/this.num2;
}
}