import { Component } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public datas:any=[];

  constructor(private detailService:DetailService){

    this.detailService.getdata().subscribe(
      (data:any)=>{
        this.datas=data;
      },
      (err:any)=>{
        alert("Not found")
      }

    )

  }

}
