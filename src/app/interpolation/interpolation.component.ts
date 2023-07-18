import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
public phone:number =904005090;
public village:string ="indukur";
public city:string ="nellore";
public country:string ="India";
public married:boolean =false;

public population:number[]=[100,200,300,400,500,600,700,800,900,1000];
public famous:string[]=['beach','mountain']

public user:any ={
  name:'Praneeth',
  age:25
};
constructor(){}
}
