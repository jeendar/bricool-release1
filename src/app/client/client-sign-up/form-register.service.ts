import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  private url = "http://localhost:3000/";
  private url_create = "client/create";
  private url_email_confirmation = "account/send-email-confirmation";
  private formData : any;

  constructor(
    private http: HttpClient
    ) {}


  sendData(data : any){
    //Hadi hiya la méthode li ghadi t envoyer les données  express
    this.formData = data;
    return this.http.post<any>(this.url+this.url_create,data);
  }

  public resendEmailConfirmation(){
    return this.http.post<any>(this.url+this.url_email_confirmation,{email:this.formData.account.email});
  }
}
