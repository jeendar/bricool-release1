import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../artisan.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-artisan-metier',
  templateUrl: './artisan-metier.component.html',
  styleUrls: ['./artisan-metier.component.css']
})
export class ArtisanMetierComponent implements OnInit {
  public metiers : [];
  public services : [];
  public selectedValu: string = '';
  public selectedServ: string = '';
  public ID_artisan: number;
  public servicesMetiers : any;

  constructor(private _authService:AuthService, private artisanService: ArtisanService, private router: ActivatedRoute) { 
    this.ID_artisan = Number(this._authService.getId());
  }

  ngOnInit() {
    this.artisanService.getMetier().subscribe((met: []) => {
      this.metiers = met;
      });

      this.getServMet(this.ID_artisan);
  }

  public selectedVal(event : any){
      this.selectedValu = event.target.value;
      console.log(this.selectedValu);

      this.artisanService.getServiceByIdMetier(this.selectedValu).subscribe((serv: []) => {
        this.services = serv;
        });
  }

  public selectedService(event : any){
    this.selectedServ = event.target.value;
    console.log(this.selectedServ);
}

  public addServMet(){
    var servMet = {
      idService : parseInt(this.selectedServ),
      idArtisant : this.ID_artisan
    }
    this.artisanService.addServiceMetier(servMet).subscribe(
      res => {
        console.log(res);
        this.getServMet(servMet.idArtisant);
      },
      err => {
        console.log("Error :" + err);
      }
    );
    console.log(servMet);
  }

  public getServMet(id){
    console.log(id);
    this.artisanService.getServiceMetier(id).subscribe(
      res => {
        this.servicesMetiers = res;
        console.log(res);
      },
      err => {
        console.log("Error :" + err);
      }
    );
  }
  
}
