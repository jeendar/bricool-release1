import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {ArtisanService} from '../artisan.service';
import { AuthService } from 'src/app/shared/auth.service';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const artisanUploadFilesURL = '/artisan/projects';
const API_URL = 'http://localhost:3000';
const URL = API_URL + artisanUploadFilesURL;

@Component({
  selector: 'app-artisan-projets',
  templateUrl: './artisan-projets.component.html',
  styleUrls: ['./artisan-projets.component.css']
})
export class ArtisanProjetsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  private IDArtisan = Number(this._authService.getId());
  private desc: any;
  private title: any;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


  constructor(private _authService:AuthService, private artisanService: ArtisanService) {
  }

  ngOnInit() {
  }

  /**
   * - Add Project
   * - Upload project Image
   Author : Zakaria
   */

  private insertProjectImage(idPorject: string) {
    this.artisanService.insertImageProject(idPorject).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

  private addProjectInfos() {
    this.artisanService.addProject(this.desc, this.title, this.IDArtisan).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
