import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }

  getactions():Observable<any>{
  return this.httpClient.get("https://www.boredapi.com/api/activity");

  }
}
