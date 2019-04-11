import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtisanService } from 'src/app/artisan/artisan.service';

declare let paypal : any;
@Component({
  selector: 'app-client-artisan-profil',
  templateUrl: './client-artisan-profil.component.html',
  styleUrls: ['./client-artisan-profil.component.css']
})
export class ClientArtisanProfilComponent implements OnInit {

  addScript : boolean = false;
  public artisanProjects: [];
  finalAmount : number = 0;
  private id;
  public artisan = {
    firstname: null,
    lastname: null,
    feedbackReview: null
  };

  private nbrPro: number;

  private starState: string;
  private chatBox: HTMLElement;
  private feedBack = {
    note: null,
    review: null,
    idClient: 20,
    ArtisanId: this.id
  };
  private rating = {
    note: null,
    ClientId: null
  };
  private feedBacks;
  private feedbackReview: string;

  constructor(private clientService : ClientService, private router : ActivatedRoute, private rout : Router, private artisanService: ArtisanService) { }

  ngOnInit() {
    this.chatBox = document.getElementById('chat-box');
    this.id = this.router.snapshot.paramMap.get('id');
    this.clientService.getOneArtisan(this.id).subscribe((data :any) => {
      this.artisan=data;
      console.log(data);
    });
    this.getProjectsNbr(this.id);
    this.getFeedBacks(this.id);
    this.starState = 'far';
    this.getProjects(this.id);

  }

  private getProjectsNbr(artisanId) {
    this.artisanService.getNbrProjectsByartisan(artisanId).subscribe(
      res => {
        this.nbrPro = res.ProjectsNbr;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

  //******************************** */

  private getFeedBacks(artisanId) {
    this.artisanService.getArtisanFeedBacks(artisanId).subscribe(
      res => {
        this.feedBacks = res.feedbacks;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }

  private saveFeedBack(artisanId, feedBack) {
    this.artisanService.addClientFeedBack(artisanId, feedBack).subscribe(
      res => {
        console.log('Added !');
        this.getFeedBacks(this.id);
      }, err => {
        console.log('error !');
        console.log(err);
      });
  }

  private addComment() {
    this.feedBack.review = this.artisan.feedbackReview;
    this.saveFeedBack(this.id, this.feedBack);
    this.artisan.feedbackReview = '';
  }

  private onRatingChange(note: any) {
    console.log(note);
    this.rating = {
      note: note.rating,
      ClientId: this.feedBack.idClient
    };
    this.artisanService.addArtisanNote(this.id, this.rating).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log('error !');
        console.log(err);
      });
  }

  /**
   * Payment
   */

  
  paypalConfig = {
    env : 'sandbox',
    client : {
       sandbox : 'ATZrp9TOHVwr7YCGfCSya04btXaqoSejWw_hhAgdpb8BYsOrcwO-8Hhrq4fgL-Fo4H6hHHFobxEQmqvt'
    },
    commit : true,
    createOrder : (data,actions)=>{
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: this.finalAmount
          }
        }]
      });
    },
    onApprove: (data, actions)=>{
      var idArt = this.id;
      return actions.order.capture().then(function(details) {
        return fetch('http://localhost:3000/payment/create',{
          method : 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            idArtisan : idArt,
            orderID: data.orderID,
            payerID: data.payerID,
            payerName: details.payer.name.given_name + ' ' + details.payer.name.surname,
            payerEmail: details.payer.email_address,
            payerPhone: details.payer.phone.phone_number.national_number,
            receivedTime: details.create_time,
            receivedAmount: details.purchase_units[0].amount.value
          })
        });
      });
      this.finalAmount = 0;
    }
  }

  

  ngAfterViewChecked(): void {
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Buttons(this.paypalConfig).render('#paypal-button-container');
      });
    }
  }
  addPaypalScript(): any {
    this.addScript = true;
    return new Promise((resolve,reject)=>{
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypal.com/sdk/js?client-id=ATZrp9TOHVwr7YCGfCSya04btXaqoSejWw_hhAgdpb8BYsOrcwO-8Hhrq4fgL-Fo4H6hHHFobxEQmqvt';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }

  private getProjects(artisanId) {
    this.artisanService.getArtisanProjects(artisanId).subscribe(
      res => {
        console.log(res);
        this.artisanProjects = res;
      },
      err => {
        console.log('Error occured:', err);
      }
    );
  }
}
