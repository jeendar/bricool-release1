import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  private urlN = "http://localhost:3000";
  private url_get_nbr_projects = '/artisan/get-nbr-projects';
  private url = "http://localhost:3000/admin";
  private url_list = "/artisan-list";
  private url_list_client = "/client-list";
  private url_profil = "/artisan-profil";
  private url_not = "/getArtisanInserted";
  private url_metiers = "/metiers";
  private url_metier_exist = "/metierExist";
  private url_services = "/services";
  private url_service_exist = "/serviceExist";
  private url_add_metier = "http://localhost:3000/metier/create";
  private url_add_service = "http://localhost:3000/service/create";
  private url_delete_service = "http://localhost:3000/service/delete";
  private url_update_metier = "http://localhost:3000/metier/update";
  private url_update_service = "http://localhost:3000/service/update";
  private url2 = "http://localhost:3000/account/validate";

  private url3 ="http://localhost:3000/account/invalidate";
  private url4 ="http://localhost:3000/admin/promote";
  private url5 ="http://localhost:3000/admin/demote";
  private url6 ="http://localhost:3000/admin/nbrClients";
  private url7 ="http://localhost:3000/admin/nbrArtisans";
  private url_delete_metier = "http://localhost:3000/metier/delete";
  url_all_paiements: string = "/payment/all";
  url_payment_details:string = "/payment/details";
  url_payment_validate:string = "/payment/validate";

  constructor(private http : HttpClient) { }

  public getArtisan(){
    return this.http.get<any>(this.url+this.url_list);
  }

  public getClient(){
    return this.http.get<any>(this.url+this.url_list_client);
  }

  public getMetiers(){
    return this.http.get<any>(this.url+this.url_metiers);
  }
  public getServices(){
    return this.http.get<any>(this.url+this.url_services);
  }
  //************* */
  public getNbArtisans(){
    return this.http.get<any>(this.url7);
  }
  public getNbClients(){
    return this.http.get<any>(this.url6);
  }
//************* */
  public getOneArtisan(id_art){
    let param = new HttpParams().set('id',id_art);
    return this.http.get<any>(this.url+this.url_profil,{params:param});
  }

  public validate(param){
    
    //console.log(param);
    return this.http.post<any>(this.url2,param).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log('Error occured:' , err);
        
      }
    );
  }

  //*************** */

  public invalidate(param){
    return this.http.post<any>(this.url3,param).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log('Error occured:' , err);
        
      }
    );
  }

  public promote(param){
    return this.http.post<any>(this.url4,param).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log('Error occured:' , err);
        
      }
    );
  }

  public demote(param){
    return this.http.post<any>(this.url5,param).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log('Error occured:' , err);
        
      }
    );
  }

  //********************* */

  public getNbrProjectsByartisan(id_art) {
    const param = new HttpParams().set('ArtisanId', id_art);
    return this.http.get<any>(this.urlN+this.url_get_nbr_projects, {params: param});
  }

  //****************** */

  public metierExist(param){
    let pm = {name : param};
    return this.http.get<any>(this.url+this.url_metier_exist,{params:pm});
  }

  public addMetier(metier){
    return this.http.post<any>(this.url_add_metier,metier);
  }

  public updateMetier(metier){
    return this.http.post<any>(this.url_update_metier,metier);
  }

  public addService(service){
    var ser = {
      idMetier : service.idMetierReal,
      name_service : service.nameService
    }
    return this.http.post<any>(this.url_add_service,ser);
  }

  public updateService(service){
    return this.http.post<any>(this.url_update_service,service);
  }
  
  public serviceExist(param){
    let pm = {name : param};
    return this.http.get<any>(this.url+this.url_service_exist,{params:pm});
  }
  //******************************************************************** delete metier */
  public deleteMetier(metier){
    return this.http.post<any>(this.url_delete_metier,metier);
  }

  /***************************************************************** */
  public deleteService(service){
    return this.http.post<any>(this.url_delete_service,service);
  }

  public getNotification(param){
    /*
    //console.log(param);
    return this.http.post<any>(this.url + this.url_not,param).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log('Error occured:' , err);
      }
    );
    */
  }
  public getListPayements(){
    return this.http.get<any>(this.urlN+this.url_all_paiements);
  }

  public getPaymentDetails(id){
    let param = new HttpParams().set('id',id);
    return this.http.get<any>(this.urlN+this.url_payment_details,{params:param});
  }

  public validatePayment(idTest){
    return this.http.post<any>(this.urlN+this.url_payment_validate,{id:idTest});
  }
}