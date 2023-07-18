import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public tables:any=[];
  public term:string="";

  public column:any="";
  public order:any="";



  constructor(private contactService:ContactService){

    this.contactService.gettables().subscribe(
      (data:any)=>{
       this.tables=data;
      },
      (err:any)=>{
        alert("server issue")
      }
    )

  }
  getFilteredtables(){
  this.contactService.getFilteredtables(this.term).subscribe(
    (data:any)=>{
     this.tables=data;
    },
    (err:any)=>{
      alert("server issue")
    }
  )

}
getSortedtables(){
  this.contactService.getSortedtables(this.column,this.order).subscribe(
    (data:any)=>{
     this.tables=data;
    },
    (err:any)=>{
      alert("server issue")
    }
  )

}
}


