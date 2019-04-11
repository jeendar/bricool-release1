import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-client-list',
  templateUrl: './admin-client-list.component.html',
  styleUrls: ['./admin-client-list.component.css']
})
export class AdminClientListComponent implements OnInit {

  public clients : [];
  constructor(private adminService:AdminServicesService, private router: Router) { }

  ngOnInit() {
    this.adminService.getClient().subscribe((data: []) => {
      this.clients = data;
      console.log(this.clients);
    });
  }

 

}
