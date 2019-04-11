import { Injectable } from '@angular/core';
import { ArtisanRegister, Adresse, Account,Personal } from './Models/FormRegister.Models';
import { NavigationFlowService } from './navigation-flow.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  private url = "http://localhost:3000/";
  private url_create = "artisan/create";
  private url_email = "artisan/userExist";
  
  private formRegister : ArtisanRegister = new ArtisanRegister();
  private isPersonnalValid : boolean = false;
  private isAddressValid : boolean = false;
  private isAccountValid : boolean = false;
  
  constructor(
    private navigationFlow : NavigationFlowService,
    private http : HttpClient
    ) { }

  getFormData():ArtisanRegister{
    return this.formRegister;
  }

  getPersonal() : Personal{
    var personal : Personal = {
      lastname : this.formRegister.lastname,
      firstname : this.formRegister.firstname,
      dob : this.formRegister.dob,
      phone : this.formRegister.phone
    };
    return personal;
  }

  setPersonal(data : Personal){
    this.isPersonnalValid = true;
    this.formRegister.lastname = data.lastname;
    this.formRegister.firstname = data.firstname;
    this.formRegister.dob = data.dob;
    this.formRegister.phone = data.phone;
    this.navigationFlow.validateStep("personal")
  }

  getAddress() : Adresse{
    return this.formRegister.adresse;
  }
  
  setAddress(data : Adresse){
    this.isAddressValid = true;
    this.formRegister.adresse = data;
    this.navigationFlow.validateStep("address");
  }

  getAccount() : Account{
    var account : Account = {
      email : this.formRegister.email,
      pwd : this.formRegister.pwd,
      cpwd : this.formRegister.cpwd
    }
    return account;
  }

  setAccount(data : Account){
    this.isAccountValid = true;
    this.formRegister.email = data.email;
    this.formRegister.pwd = data.pwd;
    this.formRegister.cpwd = data.cpwd;
    this.navigationFlow.validateStep("account");
  }

  isFormRegisterValid() : boolean{
    return this.isPersonnalValid && this.isAccountValid && this.isAddressValid;
  }

  sendData(data : any){
    return this.http.post<any>(this.url,data);
  }

  isEmailExit(email : string): boolean{
    var result : boolean = false;
    var data1 = {
      email : email
    }
    var res = null;
    this.http.post<boolean>(this.url+this.url_email,data1).subscribe(
      res => {
        result = res;
      },
      err => {
        console.log(err);
      }
    );
    return result;
  }
}
