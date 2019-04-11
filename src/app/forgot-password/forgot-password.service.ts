import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  url = "http://localhost:3000/account/forgot-password";

  constructor(private http:HttpClient) {

  }

  public sendEmail(email){
    this.http.post(this.url,{email:email});
  }
}
