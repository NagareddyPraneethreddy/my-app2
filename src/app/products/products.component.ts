import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products:any=[];

  constructor(private productsservice:ProductsService){
    productsservice.getproducts().subscribe(
      (data:any)=>{
        this.products=data
      },
      (err:any)=>{
        alert('table is not loaded')
      }
    )
  }

}
