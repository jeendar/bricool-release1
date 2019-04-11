import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  private IDClient : Number;
  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this.IDClient = Number(this._authService.getId());
  }

}
