import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-metiers',
  templateUrl: './admin-metiers.component.html',
  styleUrls: ['./admin-metiers.component.css']
})
export class AdminMetiersComponent implements OnInit {
  public metiers : any[];
  exist = false;
  
  constructor(private fb : FormBuilder,private adminService:AdminServicesService, private router: Router) { }

  public metierForm = this.fb.group({
    id : ['',[]],
    name : ['',[Validators.required]]
  });

  
  ngOnInit() {
    this.adminService.getMetiers().subscribe((data: []) => {
      this.metiers = data;
    });
  }

  get Name(){
    return this.metierForm.get("name");
  }

  public addMetier(){
    console.log(this.metierForm.value);
    var metier = { nameMetier : this.metierForm.get("name").value};
    this.adminService.addMetier(metier).subscribe(
      res=>{
        console.log(res);
        var result = {
          idMetier : res.insertId,
          nameMetier : metier.nameMetier
        };
        this.metiers.push(result);
        this.clearMetier();
      },
      err => {
        console.log(err);
      }
    )
  }

  public updateMetier(){
    console.log(this.metierForm.value);
    
    var metier = { 
      idMetier : this.metierForm.get("id").value,
      nameMetier : this.metierForm.get("name").value
    };
    this.adminService.updateMetier(metier).subscribe(
      res=>{
        console.log(res);
        for (let index = 0; index < this.metiers.length; index++) {
          const element = this.metiers[index];
          if(element.idMetier == metier.idMetier)
          {
            this.metiers[index].nameMetier = metier.nameMetier;
            this.clearMetier();
          }
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  public clearMetier(){
    this.metierForm.get("name").setValue("");
    this.exist = false;
    this.metierForm.get("name").setErrors(null);
  }

  public checkMetier(){
    var metier = this.metierForm.get("name").value;
    console.log(metier);
    var result : any;
    var res = this.adminService.metierExist(metier).subscribe((data : any) => {
      result = data;
      this.exist = result.exist;
    });
  }

  public update(metier){
    this.metierForm.get("id").setValue(metier.idMetier);
    this.metierForm.get("name").setValue(metier.nameMetier);
  }

  public showArtisan(artisan){
    console.log(artisan);
    this.router.navigate(['/admin/profil-artisan/'+artisan.idArtisant]);
  }
  //************************************************************************** */
  public delete(metier){
    this.adminService.deleteMetier(metier).subscribe(
      res => {
       this.adminService.getMetiers().subscribe((data2: []) => {
          this.metiers = data2;
        });     
    },
    err => {
      console.log(err);
    });
  }
}
