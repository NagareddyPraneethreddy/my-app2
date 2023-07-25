import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { domainValidator, stateValidator } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.min(10),Validators.max(26),Validators.required]),
    phone: new FormControl('',[Validators.min(100000000),Validators.required,Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required,Validators.email,domainValidator]),
    address: new FormGroup({
      Hno: new FormControl(),
      state: new FormControl('',[Validators.minLength(3),Validators.required,Validators.maxLength(10),stateValidator]),
      pin: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([]),
  });

get cardsFormArray(){
  return this.userForm.get('cards')as FormArray;
}

addcard(){
  this.cardsFormArray.push(
    new FormGroup({
      no: new FormControl('',[Validators.required]),
      exp:new FormControl(),
      cvv: new FormControl(),
    })
  )
}
  submit() {
    console.log(this.userForm);
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  
}
