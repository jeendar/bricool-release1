import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  private formData : any;
  private url = "http://localhost:3000/";
  private url_create = "artisan/create";
  private url_email = "artisan/userExist";
  private url_email_confirmation = "account/send-email-confirmation";
  private email : string;

  constructor(private http : HttpClient) { }

  public sendForm(form : any){
    this.formData = form;
    return this.http.post<any>(this.url+this.url_create,form);
  }

  public resendEmailConfirmation(){
    return this.http.post<any>(this.url+this.url_email_confirmation,{email:this.formData.account.email});
  }
  
}
