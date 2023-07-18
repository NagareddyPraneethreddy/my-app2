import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient:HttpClient) {}
    getcontents():Observable<any>{
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    
  }
  deletemail(id:any):Observable<any>{
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/todos/'+id);
    
  }

}
