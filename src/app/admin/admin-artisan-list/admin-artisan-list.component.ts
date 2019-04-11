import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-artisan-list',
  templateUrl: './admin-artisan-list.component.html',
  styleUrls: ['./admin-artisan-list.component.css']
})
export class AdminArtisanListComponent implements OnInit {

  public artisans : [];
  constructor(private adminService:AdminServicesService, private router: Router) { }

  ngOnInit() {
    this.adminService.getArtisan().subscribe((data: []) => {
      console.log(data);
      this.artisans = data;
    });
  }


  public showArtisan(artisan){
    console.log(artisan);
    this.router.navigate(['/admin/profil-artisan/'+artisan.idArtisant]);
  }


}
