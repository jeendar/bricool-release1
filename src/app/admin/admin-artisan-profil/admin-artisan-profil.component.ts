import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-artisan-profil',
  templateUrl: './admin-artisan-profil.component.html',
  styleUrls: ['./admin-artisan-profil.component.css']
})
export class AdminArtisanProfilComponent implements OnInit {

  private id;
  private nbrPro: number;
  public artisan:any;
  constructor(private adminService:AdminServicesService, private router: ActivatedRoute, private rout : Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.adminService.getOneArtisan(this.id).subscribe((data :any) => {
      this.artisan=data;
      console.log(data);
    });
    this.getProjectsNbr(this.id);
  }

  public validate(){
    this.adminService.validate(this.artisan);
    window.location.reload(); 
  }
  //***** */
  public invalidate(){
    this.adminService.invalidate(this.artisan);
    window.location.reload();
  }

  public promote(){
    this.adminService.promote(this.artisan);
    window.location.reload();
  }

  public demote(){
    this.adminService.demote(this.artisan);
    window.location.reload();
  }
  //************* */
  private getProjectsNbr(artisanId) {
    this.adminService.getNbrProjectsByartisan(artisanId).subscribe(
      res => {
        this.nbrPro = res.ProjectsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

}