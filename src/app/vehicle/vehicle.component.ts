  import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public vehicles:any=[];
  public bus:any="";

  public suresh:any="";
  public ramesh:any="";

  public ramu:any="";
  public somu:any="";

  constructor(private vehicleService:VehicleService, private router:Router){
    this.vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
  }
  getFilterVehicles(){
    this.vehicleService.getFilterVehicles(this.bus).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )

  }
  getPageVehicles(){
    this.vehicleService.getPageVehicles(this.suresh,this.ramesh).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
  }
  deleteVehicle(id:any){
    this.vehicleService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
  }
  getSortVehicles(){
    this.vehicleService.getSortVehicles(this.ramu,this.somu).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
 
  };
  view(id:any){
    this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }

  edit(id:any){
    this.router.navigateByUrl('/dashboard/edit-vehicle/'+id)
  }

}
