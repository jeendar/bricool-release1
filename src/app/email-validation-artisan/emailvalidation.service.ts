import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailvalidationService {

  private url = "http://localhost:3000/account/confirm";
  constructor(private http:HttpClient) { }

  sendValidation(token){
    return this.http.post<any>(this.url,token);
  }
}
