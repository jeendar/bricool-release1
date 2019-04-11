import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = "http://localhost:3000/admin";
  private url_list = "/artisan-list";
  private url_profil = "/artisan-profil";
  private url_metier = "http://localhost:3000/metier";
  private url_service = "http://localhost:3000/service/getServiceByIdMetier";
  private url_address = "http://localhost:3000/address"
  private url_getarts = "http://localhost:3000/client/getArtisansbyServCity";

  constructor(private http : HttpClient) { }

  public getArtisan(){
    return this.http.get<any>(this.url+this.url_list);
  }

  public getCities(){
    return this.http.get<any>(this.url_address);
  }

  //********************** */
  public getMetier(){
    return this.http.get<any>(this.url_metier);
  }

  public getServiceByIdMetier(idMet){
    let param = new HttpParams().set('idMetier',idMet);
    return this.http.get<any>(this.url_service,{params:param});
  }

  public getArtisansbyServCity(idServ, city){
    let param = new HttpParams().set('idService',idServ).set('city',city);
    console.log(param);
    return this.http.get<any>(this.url_getarts,{params:param});
  }

  //************************ */
}
