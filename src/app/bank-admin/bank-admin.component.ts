import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-admin',
  templateUrl: './bank-admin.component.html',
  styleUrls: ['./bank-admin.component.scss']
})
export class BankAdminComponent { 
 
  public addAccount:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture : new FormControl(), 
    id: new FormControl(),
  }

  );
  // constructor(private bankadminService:BankadminService){}

  submit(){
   console.log(this.addAccount)
   
  }
  

 
}
