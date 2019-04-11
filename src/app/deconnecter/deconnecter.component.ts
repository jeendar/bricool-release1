import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnecter',
  templateUrl: './deconnecter.component.html',
  styleUrls: ['./deconnecter.component.css']
})
export class DeconnecterComponent implements OnInit {
  private url: String;

  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit() {
    this.url = this._authService.getRole();
  }

  public deconnect(){
      this._authService.setDisConnected();
      this._router.navigate(['/'+this.url+'/sign-in']);
  }

}
