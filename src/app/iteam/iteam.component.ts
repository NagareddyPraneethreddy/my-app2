import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-iteam',
  templateUrl: './iteam.component.html',
  styleUrls: ['./iteam.component.scss']
})
export class IteamComponent {


  add(){
    this.commonserice.setValue();
    
  }
  
  constructor(private commonserice:CommonService){}

}
