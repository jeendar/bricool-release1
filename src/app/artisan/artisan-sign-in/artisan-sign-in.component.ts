import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-artisan-sign-in',
  templateUrl: './artisan-sign-in.component.html',
  styleUrls: ['./artisan-sign-in.component.css']
})
export class ArtisanSignInComponent implements OnInit {

  hasAnError = false;
  errorMessage = "";

  constructor(
    private _authService:AuthService,
    private fb : FormBuilder,
    private loginService:LoginServiceService,
    private router : Router) { }

  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,4}$")]],
    pwd : ['',[Validators.required,Validators.minLength(8)]]
  });

  get Email(){
    return this.loginForm.get("email");
  }

  get Pwd(){
    return this.loginForm.get("pwd");
  }

  ngOnInit() {
    
  }

  submit(){
    console.log(this.loginForm.value);
    this.loginService.sendLoginData(this.loginForm.value)
      .subscribe(
        response =>{
          console.log(response);
          if(response === null){
            this.hasAnError = true;
            this.errorMessage = "Compte inexistant";
          }else {
            if(response.status){
              if(response.rows[0].status === -1){
                this.hasAnError= true;
                this.errorMessage = "Vous n'avez pas encore verifié votre compte";
              }else if(response.rows[0].role === 0){
                this._authService.setConnected(response.rows[0].idArtisant,"artisan");
                this.router.navigate(['/artisan/profil'])
              }
              else if(response.rows[0].role === 1){
                this._authService.setConnected(response.rows[0].idArtisant,"artisanRef");
                this.router.navigate(['/artisanRef/profil']);
              }
            }else{
              this.hasAnError= true;
              this.errorMessage = "Mot de passe incorrect";
            }
          }
        },
        error =>console.log(error)
      )
  }

}
