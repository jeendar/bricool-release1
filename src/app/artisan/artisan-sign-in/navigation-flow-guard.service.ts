import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { from } from 'rxjs';
import { NavigationFlowService } from './navigation-flow.service';


@Injectable({
  providedIn: 'root'
})
export class NavigationFlowGuardService implements CanActivate {

  constructor(private router : Router,private navigationFlowService : NavigationFlowService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    let path : string = route.routeConfig.path;

    return this.verifyNavigationFlow(path);
  }

  verifyNavigationFlow(path):boolean{
    console.log("Path : " + path);
    let firstPath = this.navigationFlowService.getFirstInvalidStep(path);
    if(firstPath.length > 0){
      console.log("Redirect to : " + firstPath);
      let url = '/artisan/sign-in/'+firstPath;
      this.router.navigate([url]);
      return false;
    }
    return true;
  }
}
