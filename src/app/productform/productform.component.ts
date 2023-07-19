import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent {

  public productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    color: new FormControl(),
    features: new FormGroup({
      ram: new FormControl(),
      battery: new FormControl(),
      Procssor: new FormControl(),
    }),
    comments: new FormArray([]),
    payment: new FormControl(),
    upi: new FormControl(),
    net: new FormControl(),
  });

  submit() {
    console.log(this.productForm)
  };
  get commentsFormArray() {
    return this.productForm.get('comments') as FormArray;
  };
  comments() {
    this.commentsFormArray.push(
      new FormGroup({
        customer: new FormControl(),
        time: new FormControl(),
        message: new FormControl(),
      })
    );
  }
  delete(i:number) {
    this.commentsFormArray.removeAt(i);
  }

}
