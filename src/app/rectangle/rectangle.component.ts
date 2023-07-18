import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent {
public num1:number=0;
public num2:number=0;
public result:number=0;

a1(){
  this.result=this.num2*this.num1;
}
p1(){
  this.result=2*(this.num1+this.num2)
}
}
