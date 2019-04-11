import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServicesService } from '../admin-services.service';

@Component({
  selector: 'app-admin-payment-details',
  templateUrl: './admin-payment-details.component.html',
  styleUrls: ['./admin-payment-details.component.css']
})
export class AdminPaymentDetailsComponent implements OnInit {

 public idPayment;
  public paymentDetails;
  constructor(private adminService:AdminServicesService,private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.idPayment = this.activeRouter.snapshot.paramMap.get('id');
    this.adminService.getPaymentDetails(this.idPayment).subscribe((data :any) => {
      this.paymentDetails=data;
      console.log(data);
    });
  }

  validate() {
    this.adminService.validatePayment(this.idPayment);
    window.location.reload();
  }

}
