import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArtisanRefAuthGuard implements CanActivate {

  private loggedPages : Array<String> = [
    "profil","list-artisan"
  ];

  constructor(private _authService:AuthService,private _router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._authService.isConnected() && this._authService.isArtisanRef()){
        if(this.loggedPages.indexOf(next.url[0].toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/artisanRef/profil']);
          return false;
        }
      }else if(!this._authService.isConnected()){
        if(next.url.toString() === "sign-in"){
          return true;
        }
        this._router.navigate(['/artisan/sign-in']);
        return false;
      }
  }
}
