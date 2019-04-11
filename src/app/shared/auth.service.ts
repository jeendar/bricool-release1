import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setConnected(id,role){
    sessionStorage.setItem("connected","true");
    sessionStorage.setItem("id",id);
    sessionStorage.setItem("role",role);
  }

  setDisConnected(){
    sessionStorage.clear();
  }

  getId(){
    return sessionStorage.getItem("id");
  }

  isConnected() : Boolean{
    if(sessionStorage.getItem("connected") == "true")
      return true;
    return false;
  }

  getRole() : String{
    return sessionStorage.getItem("role");
  }

  isAdmin() : Boolean{
    if(this.getRole() == "admin")
      return true;
    return false;
  }

  isArtisan() : Boolean{
    if(this.getRole() == "artisan")
      return true;
    return false;
  }

  isArtisanRef() : Boolean{
    if(this.getRole() == "artisanRef")
      return true;
    return false;
  }

  isClient() : Boolean{
    if(this.getRole() == "client")
      return true;
    return false;
  }

}
