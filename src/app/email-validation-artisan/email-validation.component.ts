import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailvalidationService } from './emailvalidation.service';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styles: []
})
export class EmailValidationComponent implements OnInit {

  token1 = "";
  hasAnError = false;
  constructor(
    private route : ActivatedRoute,
    private validationService:EmailvalidationService) { }

  ngOnInit() {
    this.token1 = this.route.snapshot.paramMap.get('token');
    var tk = {
      confirmation_token : this.token1
    }
    this.validationService.sendValidation(tk).subscribe(
      res => {
        if(!res.status){
          this.hasAnError = true;
        }
      },
      err =>{
        console.log(err);
      }
    );
  }

}
