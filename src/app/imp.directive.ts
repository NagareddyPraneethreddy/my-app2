import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementref:ElementRef) {
    elementref.nativeElement.style.color="red"
   }

}
