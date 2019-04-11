import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-client-artisan-list',
  templateUrl: './client-artisan-list.component.html',
  styleUrls: ['./client-artisan-list.component.css']
})
export class ClientArtisanListComponent implements OnInit {

  public artisans : [];
  public city : any;
  public client : any;
  private IDClient : Number;

  constructor(private _authService:AuthService, private clientService: ClientService , private router: Router) { }

  ngOnInit() {
   this.IDClient = Number(this._authService.getId());
    
    this.clientService.getClientByID(this.IDClient).subscribe((data: []) => {
      this.client = data;
      this.city = this.client[0].city;
      
      this.clientService.artisansByAddress(this.city).subscribe((data: []) => {
        this.artisans = data;
        console.log(this.artisans);
        });
      });
  }

  public showArtisan(artisan){
    console.log(artisan);
    this.router.navigate(['/client/artisan-profil/'+artisan.idArtisant]);
  }

}
