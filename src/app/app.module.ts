import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
 

//Calendar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailValidationComponent } from './email-validation-artisan/email-validation.component';
import { EmailValidationClientComponent } from './email-validation-client/email-validation-client.component';
import { ArtisanSignUpComponent } from './artisan/artisan-sign-up/artisan-sign-up.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminArtisanListComponent } from './admin/admin-artisan-list/admin-artisan-list.component';
import { AdminArtisanProfilComponent } from './admin/admin-artisan-profil/admin-artisan-profil.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ArtisanSignInComponent } from './artisan/artisan-sign-in/artisan-sign-in.component';
import { ClientComponent } from './client/client.component';
import { ArtisanSignUpFinalComponent } from './artisan/artisan-sign-up-final/artisan-sign-up-final.component';
import { ClientSignUpComponent } from './client/client-sign-up/client-sign-up.component';
import { ClientSignInComponent } from './client/client-sign-in/client-sign-in.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientNavComponent } from './client/client-nav/client-nav.component';
import { ClientArtisanProfilComponent } from './client/client-artisan-profil/client-artisan-profil.component';
import { ClientArtisanListComponent } from './client/client-artisan-list/client-artisan-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './home/contact/contact.component';
import { ArtisanProfilComponent } from './artisan/artisan-profil/artisan-profil.component';
import { NavComponent } from './artisan/nav/nav.component';
import { CalendrierComponent } from './artisan/calendrier/calendrier.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminClientListComponent } from './admin/admin-client-list/admin-client-list.component';
import { AdminNotificationsComponent } from './admin/admin-notifications/admin-notifications.component';
import { AdminMetiersComponent } from './admin/admin-metiers/admin-metiers.component';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ArtisanrefComponent } from './artisanref/artisanref.component';
import { ArtisanrefProfilComponent } from './artisanref/artisanref-profil/artisanref-profil.component';
import { ArtisanrefArtisanListComponent } from './artisanref/artisanref-artisan-list/artisanref-artisan-list.component';
import { ArtisanProjetsComponent } from './artisan/artisan-projets/artisan-projets.component';
import { ArtisanrefNavComponent } from './artisanref/artisanref-nav/artisanref-nav.component';
import { StarRatingModule } from 'angular-star-rating';
import { ArtisanMetierComponent } from './artisan/artisan-metier/artisan-metier.component';
import { ArtisanrefArtisanProfilComponent } from './artisanref/artisanref-artisan-profil/artisanref-artisan-profil.component';
import { DeconnecterComponent } from './deconnecter/deconnecter.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPaymentsComponent } from './admin/admin-payments/admin-payments.component';
import { AdminPaymentDetailsComponent } from './admin/admin-payment-details/admin-payment-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ArtisanComponent,
    AdminComponent,
    HomeComponent,
    ResetPasswordComponent,
    EmailValidationComponent,
    EmailValidationClientComponent,
    ArtisanSignUpComponent,
    AdminSignInComponent,
    AdminArtisanListComponent,
    AdminArtisanProfilComponent,
    AdminHomeComponent,
    ArtisanSignInComponent,
    ClientComponent,
    ArtisanSignUpFinalComponent,
    ClientSignInComponent,
    ClientSignUpComponent,
    ClientHomeComponent,
    ClientNavComponent,
    ClientArtisanProfilComponent,
    ClientArtisanListComponent,
    ContactComponent,
    ArtisanProfilComponent,
    AdminNavComponent,
    NavComponent,
    AdminClientListComponent,
    CalendrierComponent,
    AdminNotificationsComponent,
    AdminMetiersComponent,
    AdminServicesComponent,
    ForgotPasswordComponent,
    ArtisanrefComponent,
    ArtisanrefProfilComponent,
    ArtisanrefArtisanListComponent,
    ArtisanProjetsComponent,
    ArtisanrefNavComponent,
    ArtisanMetierComponent,
    ArtisanrefArtisanProfilComponent,
    DeconnecterComponent,
    FooterComponent,
    AdminPaymentsComponent,
    AdminPaymentDetailsComponent
  ],
  exports: [CalendrierComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    HttpClientModule,
    FileUploadModule,
    MDBBootstrapModule.forRoot(),
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FileUploadModule,
    MDBBootstrapModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
