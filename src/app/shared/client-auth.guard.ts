import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard implements CanActivate {
  
  private loggedPages : Array<String> = [
    "profil","artisan-list","artisan-profil","sign-out"
  ];

  private unLoggedPages : Array<String> = [
    "sign-in","sign-up"
  ];


  constructor(private _authService:AuthService,private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._authService.isConnected() && this._authService.isClient()){
        if(this.loggedPages.indexOf(next.url[0].toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/client/home']);
          return false;
        }
      }else if(!this._authService.isConnected()){
        if(this.unLoggedPages.indexOf(next.url.toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/client/sign-in']);
          return false;
        }
      }
  }
}
