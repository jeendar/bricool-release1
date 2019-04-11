import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArtisanAuthGuard implements CanActivate {

  private loggedPages : Array<String> = [
    "profil","projets","calendrier","metiers","sign-out"
  ];
  private unLoggedPages : Array<String> = [
    "sign-in","sign-up","sign-up-done","almost-done"
  ];

  constructor(private _authService:AuthService,private _router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._authService.isConnected() && this._authService.isArtisan()){
        if(this.loggedPages.indexOf(next.url[0].toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/artisan/profil']);
          return false;
        }
      }else if(!this._authService.isConnected()){
        if(this.unLoggedPages.indexOf(next.url[0].toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/artisan/sign-in']);
          return false;
        }
      }
  }
}
