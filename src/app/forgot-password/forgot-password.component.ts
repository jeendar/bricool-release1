import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  previousUrl = "";
  isSend = false;
  constructor(private fb:FormBuilder,private router:Router) { }
  formForgot = this.fb.group({
    email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,4}$")]]
  })

  ngOnInit() {
    //console.log(this.previousRouteService.getPreviousUrl());
    this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)).subscribe((e) => {
      console.log('NAVIGATION PREVIOUS => ',e);
    });
  }

  get Email(){
    return this.formForgot.get("email");
  }

  submitReset(){
    this.isSend = true;
  }
}
