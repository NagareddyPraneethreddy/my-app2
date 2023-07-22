import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public id: any = {};

  public createForm: FormGroup = new FormGroup(
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
  constructor(private vehicleService: VehicleService, private actiavtedRoute: ActivatedRoute) {
    actiavtedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        vehicleService.getVehicle(this.id).subscribe(
          (data: any) => {
            this.createForm.patchValue(data);
          }
        )
      }
    )

  }
  submit() {
    console.log(this.createForm.value);
    if (this.id?.length > 0) {
      this.vehicleService.updateVehicle(this.id, this.createForm.value).subscribe(
        (data: any) => {
          alert("Vehicle updated Succsfully")
        },
        (err: any) => {
          alert("vhicle is not Updated")
        }
      )
    }
    else {
      this.vehicleService.createVehicle(this.createForm.value).subscribe(
        (data: any) => {
          alert("vehicle creatd sucessfully")
        },
        (err: any) => {
          alert("vehicle is not created")
        }
      )
    }
  }
}
