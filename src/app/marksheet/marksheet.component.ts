import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent {
  public final:string=""
  public values:any=[
    {name:'pen',price:10,rating:5,free:false},
    {name:'phone',price:24000,rating:4.5,free:true},
    {name:'shirt',price:899,rating:5,free:true},
    {name:'cap',price:250,rating:4.1,free:true},
    {name:'mobile case',price:90,rating:4,free:false},
    {name:'remote',price:180,rating:3,free:false},
    {name:'laptop',price:45999,rating:5,free:true}
  ]
  search(){
     this.values=this.values.filter((value:any)=>value.name.includes(this.final))
  }
  delivery(){
    this.values=this.values.filter((value:any)=>value.free==true);
  }
  high(){
    this.values=this.values.sort((a:any,b:any)=>b.price-a.price);
  }
  low(){
    this.values=this.values.sort((a:any,b:any)=>a.price-b.price);
  }
  top(){
    this.values=this.values.sort((a:any,b:any)=>b.rating-a.rating);
  }
  less(){
    this.values=this.values.sort((a:any,b:any)=>a.rating-b.rating);
  }
  fifty(){
    this.values=this.values.map((value:any)=>{
    value.price=value.price/2;
    return value
    })
  }
  cart(){
    alert(this.values.length)
  }
  total(){
    var total = this.values.reduce((sum:any,a:any)=>sum+a.price,0);
    alert(total)

   
  }
  charges(){
    this.values=this.values.map((value:any)=>{
      if(value.free==false){
      value.price=value.price+15;
      return value;
      }
      else{
        return value;
      }
    })
  
  }
  delete(i:any){
    this.values.splice(i,1);
  }

}