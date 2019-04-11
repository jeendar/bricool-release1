import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtisanRefService {

  private url_get_artisan = '/artisan/';
  private url_get_nbr_projects = '/artisan/get-nbr-projects';
  private url_update_artisan_infos = '/artisan/update-infos';
  private url_delete_artisan_infos = '/artisan/delete-infos';
  private url_list = "/admin/artisan-list";
  private url2 = "http://localhost:3000/artisan/art-verified";

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

  public getArtisan(){
    return this.http.get<any>(`${environment.API_URL}${this.url_list}`);
  }

  public verified(param){
    console.log(param);
    return this.http.post<any>(this.url2,param).subscribe(
      res => {
        console.log(res);       
      },
      err => {
        console.log('Error occured:' , err);     
      }
    );
  }

}
