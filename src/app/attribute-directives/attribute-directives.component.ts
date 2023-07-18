import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {

  public term:string="";

  public students:any =[
    {name:'ajay',science:99,math:99},
    {name:'BALLU',science:78,math:88},
    {name:'CHAITANYA',science:20,math:40},
    {name:'DON',science:98,math:25},
    {name:'ESHWAR',science:35,math:78},
    {name:'FAZIL',science:90,math:10},
    {name:'ARJUN',science:70,math:69},
    {name:'BUNNY',science:98,math:80},
    {name:'CHARAN',science:90,math:90},
    {name:'DHIRA',science:90,math:90},

  ]
 public today:any=new Date();

 search(){
  this.students=this.students.filter((student:any)=>student.name.includes(this.term))
 }
 add(){
  this.students=this.students.map((student:any)=>{
    student.science=student.science+2;
    return student;
  })
 }
 sort(){
    this.students=this.students.sort((a:any,b:any)=>b.science-a.science)
  }
  total(){
    this.students=this.students.reduce((sum:number,a:any)=>sum+a.science,0);
    alert( this.students ) ; 
  }

}

