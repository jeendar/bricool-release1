import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";
import { AdminServicesService } from '../admin-services.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {

  data : any;

  constructor(private router : Router,private serv:AdminServicesService) { }

  ngOnInit() {
    let obs = interval(1000);

    obs.subscribe(value => {
      //console.log("Subscriber: " + value)
      var date = new Date();
      //console.log(date);
      this.serv.getNotification(date);
    });
    /*
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));
  /*  this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(21);
      },1000);
      setTimeout(() => {
        observer.next(22);
      },2000);
      setTimeout(() => {
        observer.complete();
      },3000);
    });
    
     let subscriber = this.data.subscribe(
       value => console.log(value),
       err => console.log(err),
       () => console.log('done')
     );
     */
  }
  goToArtisanList(){
    this.router.navigate(['/admin/list-artisan']);
  }

}
