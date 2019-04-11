import { Component, OnInit } from '@angular/core';
import { ArtisanRefService } from '../artisan-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisanref-artisan-list',
  templateUrl: './artisanref-artisan-list.component.html',
  styleUrls: ['./artisanref-artisan-list.component.css']
})
export class ArtisanrefArtisanListComponent implements OnInit {

  public artisans : [];
  constructor(private adminService:ArtisanRefService, private router: Router) { }

  ngOnInit() {
    this.adminService.getArtisan().subscribe((data: []) => {
      console.log(data);
      this.artisans = data;
    });
  }


  public showArtisan(artisan){
    console.log(artisan);
    this.router.navigate(['/artisanRef/profil-artisan/'+artisan.idArtisant]);
  }

}
