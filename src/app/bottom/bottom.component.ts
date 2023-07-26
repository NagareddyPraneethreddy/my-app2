import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {
  @Input() public num1: number = 0;
  @Input() public num2: number = 0;
  
  @Output() public view:EventEmitter<any>=new EventEmitter();
  
  add() {
    this.view.emit(this.num1+this.num2)
  }
  sub() {
    this.view.emit(this.num1-this.num2)
  }
  mul() {
    this.view.emit(this.num1*this.num2)
  }

}
