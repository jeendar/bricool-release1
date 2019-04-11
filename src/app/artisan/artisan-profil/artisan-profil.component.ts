import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../artisan.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-artisan-profil',
  templateUrl: './artisan-profil.component.html',
  styleUrls: ['./artisan-profil.component.scss']
})
export class ArtisanProfilComponent implements OnInit {

  private currentArtisan: any;
  private nbrPro: number;
  private ID_artisan: number;
  public artisanProjects: [];


  constructor(private _authService:AuthService, private artisanService: ArtisanService) {
    this.ID_artisan = Number(this._authService.getId());

  }

  ngOnInit() {
    this.getCurrentArtisan();
    this.getProjectsNbr(this.ID_artisan);
    this.getProjects(this.ID_artisan);
  }
  private getCurrentArtisan() {
    this.artisanService.getOneArtisan(this.ID_artisan).subscribe(
      res => {
        console.log(res);
        this.currentArtisan = res;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  };

  private updateArtisanInfos(artisan) {
    this.artisanService.updateArtisan(artisan).subscribe(
      res => {
        console.log(res);
        console.log(this.currentArtisan);
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

  private getProjectsNbr(artisanId) {
    this.artisanService.getNbrProjectsByartisan(artisanId).subscribe(
      res => {
        this.nbrPro = res.ProjectsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }
  private getProjects(artisanId) {
    this.artisanService.getArtisanProjects(artisanId).subscribe(
      res => {
        console.log(res);
        this.artisanProjects = res;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

}
