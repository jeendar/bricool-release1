import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  form = {
    email : '',
    pwd : ''
  }
  hasAnError = false;
  errorMessage="";
  constructor(private _authService:AuthService, private rendred: Renderer2,private router : Router) { 
  }

  ngOnInit() {
    this.rendred.addClass(document.body, 'login');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.rendred.removeClass(document.body,"login");
  }

  login(){
    console.log("login btn clicked");
    console.log(this.form.email);
    console.log(this.form.pwd);
    if(this.form.email === "" && this.form.pwd === ""){
      this.hasAnError = true;
      this.errorMessage = "Email et Mot de passe obligatoires !!";
    }
    else if(this.form.email === "admin.admin@gmail.com" && this.form.pwd === "azerty123456"){
      this._authService.setConnected(1,"admin");
      this.router.navigate(['/admin/home']);
    }else{
      this.hasAnError = true;
      this.errorMessage = "Mot de passe ou Email incorrect !!";
    }
  }
}
