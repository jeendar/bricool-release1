import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllAuthGuard implements CanActivate {

  constructor(private _authService:AuthService,private _router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._authService.isConnected()){
        if(this._authService.getRole() === next.url.toString()){
          return true;
        }else{
          this._router.navigate(['/'+this._authService.getRole()+'/sign-in']);
          return false;
        }
      }
      return true;
  }
}
