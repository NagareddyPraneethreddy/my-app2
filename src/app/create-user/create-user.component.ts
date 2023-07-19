import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      Hno: new FormControl(),
      State: new FormControl(),
      pin: new FormControl(),
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
      no: new FormControl(),
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
