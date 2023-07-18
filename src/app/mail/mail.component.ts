import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  public contents:any=[];

  constructor(private mailService:MailService){
    this.mailService.getcontents().subscribe(
      (data:any)=>{
        this.contents=data;
      },
      (err:any)=>{
        alert("Internal server error")

      }
    )
  }
  deletemail(id:any){
    this.mailService.getcontents().subscribe(
      (data:any)=>{
        alert("Confirm to Delete MAIL");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error")

      }
    )
  }

}
