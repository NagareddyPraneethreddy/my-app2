import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {
public num1:number=0;
public num2:number=0;
public result:number=0;

b1(){
  this.result=this.num2/((this.num1/100)*(this.num1/100))
}
}
