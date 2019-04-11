import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-client-sign-in',
  templateUrl: './client-sign-in.component.html',
  styleUrls: ['./client-sign-in.component.css']
})
export class ClientSignInComponent implements OnInit {

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

  ngOnInit() {
  }
  goToSignUp() {
    this.router.navigateByUrl('/client/sign-up');
     //window.location.reload();
  }

  get Email(){
    return this.loginForm.get("email");
  }

  get Pwd(){
    return this.loginForm.get("pwd");
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
              }else{
                //alert('you re in client home ;;;;!!!');
                this._authService.setConnected(response.rows[0].idClient,"client");
                this.router.navigate(['/client/artisan-list']);
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
