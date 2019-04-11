import { Component, OnInit, Renderer2 } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public nbrArt: number;
  public nbrClt: number;

  constructor(private adminService:AdminServicesService) { }

  ngOnInit() {
    this.getnbArtisants();
    this.getnbClients();
  }
  
  public getnbArtisants() {
    this.adminService.getNbArtisans().subscribe(
      res => {
        this.nbrArt = res[0].ArtisansNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  } 

  public getnbClients() {
    this.adminService.getNbClients().subscribe(
      res => {
        this.nbrClt = res[0].ClientsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }


}
