import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {

  public metiers : any[];
  public metiersReal : any[];
  exist = false;
  public selectedValuMet: string = '';
  
  constructor(private fb : FormBuilder,private adminService:AdminServicesService, private router: Router) { }

  public metierForm = this.fb.group({
    id : ['',[]],
    idMetierReal : ['',[]],
    name : ['',[Validators.required]]
  });

  
  ngOnInit() {
    this.adminService.getServices().subscribe((data: []) => {
      this.metiers = data;
      console.log(this.metiers);
    });

    this.adminService.getMetiers().subscribe((data: []) => {
      this.metiersReal = data;
      console.log(this.metiersReal);
    });
  }

  get Name(){
    return this.metierForm.get("name");
  }

  public selectedVal(event : any){
    this.selectedValuMet = event.target.value;
    console.log(parseInt(this.selectedValuMet));
  }

  public addMetier(){
    var metier = { 
                  idMetierReal : this.selectedValuMet,
                  nameService : this.metierForm.get("name").value
                };           
    this.adminService.addService(metier).subscribe(
      res=>{
        console.log(res);
        this.adminService.getServices().subscribe((data: []) => {
          this.metiers = data;
          console.log(this.metiers);
        });
      },
      err => {
        console.log(err);
      }
    ) 
  }

  public updateMetier(){
    console.log(this.metierForm.value);
    
    var service = { 
      idService : this.metierForm.get("id").value,
      nameService : this.metierForm.get("name").value
    };
    this.adminService.updateService(service).subscribe(
      res=>{
        console.log(res);
        this.adminService.getServices().subscribe((data: []) => {
          this.metiers = data;
          console.log(this.metiers);
        });
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
    var res = this.adminService.serviceExist(metier).subscribe((data : any) => {
      result = data;
      this.exist = result.exist;
    });
  }

  public update(metier){
    console.log(metier);
    this.metierForm.get("id").setValue(metier.idService);
    this.metierForm.get("name").setValue(metier.name_service);
  }

  public showArtisan(artisan){
    console.log(artisan);
    this.router.navigate(['/admin/profil-artisan/'+artisan.idArtisant]);
  }

  public delete(service){
    console.log(service);
    this.adminService.deleteService(service).subscribe(
      res => {
        this.adminService.getServices().subscribe((data: []) => {
          this.metiers = data;
        });    
    },
    err => {
      console.log(err);
    });
  }
}
