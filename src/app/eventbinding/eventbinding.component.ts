import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent {

  test(){
    alert("clicked");
  }
  test1(){
    alert("double click")
  }
  test2(){
    alert("key down")
  }
  test3(){
    alert("3rd time")
  }
  test4(){
    alert('final')
  }
  test5(){
    alert('kathi andhuko jankaki')
  }
  test6(){
    alert('sathi reddy champeyali nakodukuni')
  }
  test7(){
    alert('robo')
  }

}
