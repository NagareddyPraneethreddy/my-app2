import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  public ap:string="";
  public bp:number=0;

  public view:string="";
  constructor(){}

  catch(value:any){
    this.view=value;
  }
}
