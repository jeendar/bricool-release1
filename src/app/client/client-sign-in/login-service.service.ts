import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private _url = "http://localhost:3000/client/login";

  constructor(private http:HttpClient) { }

  sendLoginData(form){
    return this.http.post<any>(this._url,form);
  }
}
