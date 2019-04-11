import { Component, OnInit } from '@angular/core';
import { FormRegisterService } from './form-register.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artisan-sign-up',
  templateUrl: './artisan-sign-up.component.html',
  styles: ['.centred { text-align : center; }'],
  styleUrls: ['./artisan-sign-up.component.css']
})
export class ArtisanSignUpComponent implements OnInit {

  errorMessage = '';
  hasAnError = false;
  constructor(private router:Router,private formRegisterService: FormRegisterService,private fb:FormBuilder) { }


  formRegister = this.fb.group({
    sexe : [1,[Validators.required]],
    lastname : ['',[Validators.required,Validators.pattern("^[A-Za-z]+([\ A-Za-z]+)*")]],
    firstname : ['',[Validators.required,Validators.pattern("^[A-Za-z]+([\ A-Za-z]+)*")]],
    dob : ['',Validators.required],
    phone : ['',[Validators.required,Validators.pattern("^(0|00212|/\+212){1}[0-9]{9}$")]],
    address : this.fb.group({
      street : ['',[Validators.required,Validators.minLength(3)]],
      city : ['',[Validators.required,Validators.minLength(3)]],
      state : ['',[Validators.required,Validators.minLength(3)]],
      zipcode : ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(5),Validators.minLength(5)]]
    }),
    account : this.fb.group({
      email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,4}$")]],
      pwd : ['',[Validators.required,Validators.minLength(8)]],
      cpwd : ['',Validators.required]
    })
  },{validator:PasswordValidator});

  ngOnInit() {
    
  }

  get Sexe(){
    return this.formRegister.get('sexe');
  }

  get LastName(){
    return this.formRegister.get('lastname');
  }

  get FirstName(){
    return this.formRegister.get('firstname');
  }

  get Dob(){
    return this.formRegister.get('dob');
  }

  get Phone(){
    return this.formRegister.get('phone');
  }

  get Street(){
    return this.formRegister.get("address").get("street");
  }
  get State(){
    return this.formRegister.get("address").get("state");
  }
  get City(){
    return this.formRegister.get("address").get("city");
  }
  get ZipCode(){
    return this.formRegister.get("address").get("zipcode");
  }

  get Email(){
    return this.formRegister.get("account").get("email");
  }

  get Pwd(){
    return this.formRegister.get("account").get("pwd");
  }

  get CPwd(){
    return this.formRegister.get("account").get("cpwd");
  }

  submit(){
    console.log(this.formRegister.value);
    this.formRegisterService.sendForm(this.formRegister.value)
      .subscribe(
        response => this.router.navigateByUrl('/artisan/almost-done'),
        error => {
          this.hasAnError = true;
          this.errorMessage = "Cette email est déja utilisé par un autre utilisateur";
        }
      ); 
  }
}
