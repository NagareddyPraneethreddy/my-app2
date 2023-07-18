import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private httpClient:HttpClient) { }

  getkings():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  getSortking(ramu:any,somu:any):Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+ramu+"&order="+somu)
  } 
  getFilterking(ramesh:any,suresh:any){
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+ramesh+"&page="+suresh)
  }
}
