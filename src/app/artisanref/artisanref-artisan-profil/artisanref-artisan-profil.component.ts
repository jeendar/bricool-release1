import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtisanRefService } from '../artisan-ref.service';

@Component({
  selector: 'app-artisanref-artisan-profil',
  templateUrl: './artisanref-artisan-profil.component.html',
  styleUrls: ['./artisanref-artisan-profil.component.css']
})
export class ArtisanrefArtisanProfilComponent implements OnInit {

  private id;
  private nbrPro: number;
  public artisan:any;
  constructor(private artisanrefService:ArtisanRefService, private router: ActivatedRoute, private rout : Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.artisanrefService.getOneArtisan(this.id).subscribe((data :any) => {
      this.artisan=data;
      console.log(data);
    });
    this.getProjectsNbr(this.id);
  }

  public verified(){
    this.artisanrefService.verified(this.artisan);
    window.location.reload(); 
  }
  
  private getProjectsNbr(artisanId) {
    artisanId = this.id;
    this.artisanrefService.getNbrProjectsByartisan(artisanId).subscribe(
      res => {
        this.nbrPro = res.ProjectsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

}