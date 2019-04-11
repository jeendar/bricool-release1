import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "http://localhost:3000/admin";
  private url_list = "/artisan-list";
  private url_profil = "/artisan-profil";

  private artsByAdrs = "http://localhost:3000/client/artisanByAddress";
  private cltByid = "http://localhost:3000/client/getClientByID";

  private ur_get_artisan_projects = 'http://localhost:3000/artisan/artisan-projects';



  constructor(private http : HttpClient) { }

  public getOneArtisan(id_art){
    let param = new HttpParams().set('id',id_art);
    return this.http.get<any>(this.url+this.url_profil,{params:param});
  }

  public artisansByAddress(city){
    let param = new HttpParams().set('city',city);
    return this.http.get<any>(this.artsByAdrs,{params:param});
  }

  public getClientByID(id){
    let param = new HttpParams().set('idClient',id);
    return this.http.get<any>(this.cltByid,{params:param});
  }
  /***************** get  Artisan ptojects  */

  public getArtisanProjects(idArtisan) {
    const param = new HttpParams().set('ArtisanId', idArtisan.toString());
    return this.http.get<any>(this.ur_get_artisan_projects, {params: param});
  }
}