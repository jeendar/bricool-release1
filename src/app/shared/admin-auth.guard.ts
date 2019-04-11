import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  
  private loggedPages : Array<String> = [
    "home","list-artisan","profil-artisan","list-client","metiers","services","notifications","paiements","paiement-details","sign-out"
  ];

  constructor(private _authService:AuthService,private _router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      /*alert(next.url);
      alert(state.url);
      alert(this.loggedPages.indexOf(next.url.toString())); */
      if(this._authService.isConnected() && this._authService.isAdmin()){
        if(this.loggedPages.indexOf(next.url[0].toString()) > -1){
          return true;
        }else{
          this._router.navigate(['/admin/home']);
          return false;
        }
      }else if(!this._authService.isConnected()){
        if(next.url.toString() === "sign-in"){
          return true;
        }
        this._router.navigate(['/admin/sign-in']);
        return false;
      }
  }
}
