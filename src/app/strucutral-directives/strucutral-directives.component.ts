import { Component } from '@angular/core';

@Component({
  selector: 'app-strucutral-directives',
  templateUrl: './strucutral-directives.component.html',
  styleUrls: ['./strucutral-directives.component.scss']
})
export class StrucutralDirectivesComponent {
   public names:string[]=['Ajay','Bharath','virat'];

   public states:string[]=['Select state','Andhra Pradesh','Telangana','Tamil Nadu','Karanataka','Kerala','Goa','Bihar','Maharastra']
  
  public products:any=[
   {name:'Pen',price:20},
   {name:'Book',price:50},
   {name:'Mobile',price:1000},

  
  ]

public values:any=[
  {name:'a',phone:9494,class:10,marks:99},
  {name:'b',phone:9009,class:12,marks:98},
  {name:'c',phone:9844,class:12,marks:97},
  {name:'d',phone:9990,class:10,marks:97},
]
public num:number=0;
 

}
