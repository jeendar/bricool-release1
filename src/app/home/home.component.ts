import { Component, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from './home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public artisans : [];
  public metiers : [];
  public services : [];
  public cities : [];
  public selectedValu: string = '';
  public selectedSrv: string = '';
  public selectedCty: string = '';
  public arts : [];

  constructor(private Service:HomeService, private router: ActivatedRoute, private rout : Router) { }

  ngOnInit() {
    this.Service.getArtisan().subscribe((data: []) => {
    this.artisans = data;
    });
    
    this.Service.getMetier().subscribe((met: []) => {
    this.metiers = met;
    });

    this.Service.getCities().subscribe((serv: []) => {
      this.cities = serv; 
      }); 
  }

  public selectedVal(event : any){
    this.selectedValu = event.target.value;

  this.Service.getServiceByIdMetier(this.selectedValu).subscribe((serv: []) => {
    this.services = serv;
    });
  }
  public selectedServ(event : any){
    this.selectedSrv = event.target.value;
  }

  public selectedCity(event : any){
    this.selectedCty = event.target.value;
  }
  public rechercher(){
    var idS= parseInt(this.selectedSrv);
    this.Service.getArtisansbyServCity(idS, this.selectedCty).subscribe((data: []) => {
      this.arts = data;
      console.log(this.arts);
    })
  }

  public voirPlus(artisan){
    console.log(artisan.idArtisant);
    this.rout.navigate(['/client/sign-in'], artisan.idArtisant);
  }
}
