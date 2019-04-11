import { Component, OnInit , Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormRegisterService } from './form-register.service';
import { ClientRegister } from './Models/FormRegister.Models';
import { PasswordValidator } from 'src/app/shared/password.validators';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.css']
})
export class ClientSignUpComponent implements OnInit {

  @Input()
  formRegister : ClientRegister;
  isFormValid : boolean = false;


  errorMessage = '';
  hasAnError = false;
  formsState = {};

  constructor( private router:Router,
    private fb : FormBuilder,
    private formRegisterService : FormRegisterService) { }

    personalForm = this.fb.group({
      lastname : ['',[Validators.required,Validators.pattern('^[A-Za-z]+([\ A-Za-z]+)*')]],
      firstname : ['',[Validators.required,Validators.pattern('^[A-Za-z]+([\ A-Za-z]+)*')]],
      dob : ['',Validators.required],
      phone : ['',[Validators.required,Validators.pattern('^(0|00212|/\+212){1}[0-9]{9}$')]],
      sexe : [1,Validators.required],
      address : this.fb.group({
        street : ['',[Validators.required,Validators.minLength(3)]],
        city : ['',[Validators.required,Validators.pattern("^[a-zA-Z -,]*$")]],
        state : ['',[Validators.required,Validators.pattern("^[a-zA-Z -,]*$")]],
        zipcode : ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(5),Validators.minLength(5)]],
      }),
      account : this.fb.group({
        email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,4}$")]],
        pwd : ['',[Validators.required,Validators.minLength(8)]],
        cpwd : ['',Validators.required]
      })
    },{validator:PasswordValidator});

    ngOnInit() {

    }



  get LastName(){
    return this.personalForm.get('lastname');
  }

  get FirstName(){
    return this.personalForm.get('firstname');
  }

  get Dob(){
    return this.personalForm.get('dob');
  }

  get Phone(){
    return this.personalForm.get('phone');
  }
  get Sexe(){
    return this.personalForm.get('sexe');
  }

  get Street(){
    return this.personalForm.get("address").get("street");
  }

  get City(){
    return this.personalForm.get("address").get("city");
  }

  get State(){
    return this.personalForm.get("address").get("state");
  }

  get ZipCode(){
    return this.personalForm.get("address").get("zipcode");
  }

  get Email(){
    return this.personalForm.get("account").get('email');
  }

  get Pwd(){
    return this.personalForm.get("account").get('pwd');
  }

  get CPwd(){
    return this.personalForm.get("account").get('cpwd');
  }

  submitData(){
    console.log(this.personalForm.value);
    this.formRegisterService.sendData(this.personalForm.value)
      .subscribe(
        response => this.router.navigate(['almost_done']),
        error => {
          this.hasAnError = true;
          this.errorMessage = "Cet email est déjà utilisé par un autre utilisateur";
        }
      );
  }


}
