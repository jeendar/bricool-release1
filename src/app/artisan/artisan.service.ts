import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private url_get_artisan = '/artisan/';
  private url_get_nbr_projects = '/artisan/get-nbr-projects';
  private url_update_artisan_infos = '/artisan/update-infos';
  private url_delete_artisan_infos = '/artisan/delete-infos';
  private url_get_feed_backs = '/artisan/get-feed-backs';
  private url_add_feed_backs = '/artisan/client-feedback';
  private ur_get_artisan_projects = '/artisan/artisan-projects';


  private url_service = "http://localhost:3000/service/getServiceByIdMetier";
  private url_metier = "http://localhost:3000/metier";

  private url_insert_image_project = '/artisan/projects';
  private url_add_project = '/artisan/projects';

  private url_addArtServMet = "/artisan/addArtServiceMetier";
  private url_getArtServMet = "/artisan/getArtServiceMetier";

  constructor(private http: HttpClient) {
  }

  public getOneArtisan(id_art) {
    const param = new HttpParams().set('idArtisant', id_art);
    return this.http.get<any>(`${environment.API_URL}${this.url_get_artisan}`, {params: param});
  }

  public getNbrProjectsByartisan(id_art) {
    const param = new HttpParams().set('ArtisanId', id_art);
    return this.http.get<any>(`${environment.API_URL}${this.url_get_nbr_projects}`, {params: param});
  }

  public updateArtisan(artisan) {
    return this.http.post<any>(`${environment.API_URL}${this.url_update_artisan_infos}`, artisan);
  }

  //****************************** */

  
  getArtisanFeedBacks(artisanId: number) {
    const param = new HttpParams().set('ArtisanId', artisanId.toString());
    return this.http.get<any>(`${environment.API_URL}${this.url_get_feed_backs}`, {params: param});
  }

  addClientFeedBack(artisanId: number, feedBack) {
    const param = new HttpParams().set('ArtisanId', artisanId.toString());
    return this.http.post<any>(`${environment.API_URL}${this.url_add_feed_backs}`, feedBack, {params: param});
  }

  addArtisanNote(artisanId: number, rating) {
    const param = new HttpParams().set('ArtisanId', artisanId.toString());
    return this.http.put<any>(`${environment.API_URL}${this.url_add_feed_backs}`, rating, {params: param});
  }

  //********************** */
  public getMetier(){
    return this.http.get<any>(this.url_metier);
  }

  public getServiceByIdMetier(idMet){
    let param = new HttpParams().set('idMetier',idMet);
    return this.http.get<any>(this.url_service,{params:param});
  }

  //************************ */
  public insertImageProject(idProject) {
    return this.http.post<any>(`${environment.API_URL}${this.url_insert_image_project}`, idProject);
  }


  public addProject(prDesc, prTitle, idArtisan) {
    const param = new HttpParams().set('ArtisanId', idArtisan.toString());
    const project = {
      'prDesc': prDesc,
      'prTitle': prTitle
    };
    return this.http.put<any>(`${environment.API_URL}${this.url_insert_image_project}`, {project}, {params: param});
  }
  /***************** Add services for artisan in service_artisan */
  public addServiceMetier(artisan){
    return this.http.post<any>(`${environment.API_URL}${this.url_addArtServMet}`,artisan);
  }
  /***************** get  metiers services  */
  public getServiceMetier(id_art){
    const param = new HttpParams().set('idArtisant', id_art);
    return this.http.get<any>(`${environment.API_URL}${this.url_getArtServMet}`,{params: param});
  }
  /***************** get  Artisan ptojects  */

  public getArtisanProjects(idArtisan) {
    const param = new HttpParams().set('ArtisanId', idArtisan.toString());
    return this.http.get<any>(`${environment.API_URL}${this.ur_get_artisan_projects}`, {params: param});
  }
}
