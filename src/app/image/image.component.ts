import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  public collects:any=[];
  constructor(private imageService:ImageService){
    this.imageService.getcollect().subscribe(
      (data:any)=>{
        this.collects = data.data.memes;
        },
        (err:any)=>{
          alert("serer unavailabl")
        }
    )
  }

}
