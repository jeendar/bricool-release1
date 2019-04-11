import { Component, OnInit } from '@angular/core';
import { ArtisanRefService } from '../artisan-ref.service';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-artisanref-profil',
  templateUrl: './artisanref-profil.component.html',
  styleUrls: ['./artisanref-profil.component.css']
})
export class ArtisanrefProfilComponent implements OnInit {
  private currentArtisan: any;
  private nbrPro: number;
  private ID_artisan: number;

  constructor(private _authService:AuthService, private artisanRefService: ArtisanRefService) {
    this.ID_artisan = Number(this._authService.getId());

  }

  ngOnInit() {
    this.getCurrentArtisan();
    this.getProjectsNbr(this.ID_artisan);
  }
  private getCurrentArtisan() {
    this.artisanRefService.getOneArtisan(this.ID_artisan).subscribe(
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
    this.artisanRefService.updateArtisan(artisan).subscribe(
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
    this.artisanRefService.getNbrProjectsByartisan(artisanId).subscribe(
      res => {
        this.nbrPro = res.ProjectsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

}
