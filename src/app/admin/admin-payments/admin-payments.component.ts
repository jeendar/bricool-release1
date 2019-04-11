import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from '../admin-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {

  payments = [];
  constructor(private _adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
    this._adminService.getListPayements().subscribe((data: []) => {
      console.log(data);
      this.payments = data;
    });
  }

  showPayment(payment){
    this.router.navigate(['/admin/paiement-details/'+payment.id]);
  }

}
