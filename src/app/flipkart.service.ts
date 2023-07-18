import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private httpClient:HttpClient) { }
  getcolors():Observable<any>{
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
