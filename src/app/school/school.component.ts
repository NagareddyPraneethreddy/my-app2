import { Component } from '@angular/core';
import { SchoolService } from '../school.service';
import { BankService } from '../bank.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent {
public students:any=[];
constructor(private schoolService:SchoolService){
  this.schoolService.getStudents().subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert("Internal server problem")
    }
  )
  
}


}
