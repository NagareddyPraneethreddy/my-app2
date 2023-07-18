import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public createForm:FormGroup=new FormGroup(
  {
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    id: new FormControl(),

  }
  );
  
  constructor(private vehicleService:VehicleService){}
  submit(){
    console.log(this.createForm);

    this.vehicleService.createVehicle(this.createForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle added")
      },
      (err:any)=>{
        alert("vhicle is not added")
      }
    )

  }

}
