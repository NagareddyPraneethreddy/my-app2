import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClint:HttpClient) { }

  gettables():Observable<any>{
    return this.httpClint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
  }
  getFilteredtables(term:any):Observable<any>{
    return this.httpClint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);
  }
  getSortedtables(column:any,order:any):Observable<any>{
    return this.httpClint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+"&order="+order);
  }
  
  

}
