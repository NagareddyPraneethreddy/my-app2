import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient:HttpClient) { }
  getdata():Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
