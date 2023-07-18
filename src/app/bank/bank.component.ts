import { Component } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  public accounts:any=[];
  public report:string="";

  constructor(private bankService:BankService){

    this.bankService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Problem")
      }
    )
  }
  getFilteredAccounts(){
    this.bankService.getFilteredAccounts(this.report).subscribe(

      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Problem")
      }
    )

  }
  


}
