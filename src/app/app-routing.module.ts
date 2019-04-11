import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ArtisanSignUpComponent } from './artisan/artisan-sign-up/artisan-sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminArtisanListComponent } from './admin/admin-artisan-list/admin-artisan-list.component';
import { AdminArtisanProfilComponent } from './admin/admin-artisan-profil/admin-artisan-profil.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailValidationComponent } from './email-validation-artisan/email-validation.component';
import { EmailValidationClientComponent } from './email-validation-client/email-validation-client.component';
import { ArtisanSignInComponent } from './artisan/artisan-sign-in/artisan-sign-in.component';
import { ArtisanSignUpFinalComponent } from './artisan/artisan-sign-up-final/artisan-sign-up-final.component';
import { ClientSignInComponent } from './client/client-sign-in/client-sign-in.component';
import { ClientComponent } from './client/client.component';
import { ClientSignUpComponent } from './client/client-sign-up/client-sign-up.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientArtisanListComponent } from './client/client-artisan-list/client-artisan-list.component';
import { ClientArtisanProfilComponent } from './client/client-artisan-profil/client-artisan-profil.component';
import { ContactComponent } from './home/contact/contact.component';
import { ArtisanProfilComponent } from './artisan/artisan-profil/artisan-profil.component';
import { CalendrierComponent } from './artisan/calendrier/calendrier.component';
import { AdminClientListComponent } from './admin/admin-client-list/admin-client-list.component';
import { AdminNotificationsComponent } from './admin/admin-notifications/admin-notifications.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminMetiersComponent } from './admin/admin-metiers/admin-metiers.component';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { ArtisanrefProfilComponent } from './artisanref/artisanref-profil/artisanref-profil.component';
import { ArtisanrefComponent } from './artisanref/artisanref.component';
import { ArtisanrefArtisanListComponent } from './artisanref/artisanref-artisan-list/artisanref-artisan-list.component';
import { ArtisanProjetsComponent } from './artisan/artisan-projets/artisan-projets.component';
import { ArtisanMetierComponent } from './artisan/artisan-metier/artisan-metier.component';
import { ArtisanrefArtisanProfilComponent } from './artisanref/artisanref-artisan-profil/artisanref-artisan-profil.component';
import { AllAuthGuard } from './shared/all-auth.guard';
import { ArtisanAuthGuard } from './shared/artisan-auth.guard';
import { ArtisanRefAuthGuard } from './shared/artisan-ref-auth.guard';
import { ClientAuthGuard } from './shared/client-auth.guard';
import { AdminAuthGuard } from './shared/admin-auth.guard';
import { AdminPaymentsComponent } from './admin/admin-payments/admin-payments.component';
import { AdminPaymentDetailsComponent } from './admin/admin-payment-details/admin-payment-details.component';

const routes: Routes = [
  { path : "", redirectTo : "/home",pathMatch:"full" },
  { path : "home", component : HomeComponent },
  { path : "artisan", component : ArtisanComponent,
  canActivate: [AllAuthGuard],
  children:[
          { path : "", redirectTo: '/artisan/sign-in', pathMatch:"full"},
          { path : "sign-up", component : ArtisanSignUpComponent, canActivate:[ArtisanAuthGuard]},
          { path : "sign-in", component : ArtisanSignInComponent, canActivate:[ArtisanAuthGuard]},
          { path : 'sign-up-done', component : ArtisanSignUpFinalComponent, canActivate:[ArtisanAuthGuard]},
          { path : "profil", component : ArtisanProfilComponent, canActivate:[ArtisanAuthGuard]},
          { path : "projets", component : ArtisanProjetsComponent, canActivate:[ArtisanAuthGuard]},
          { path : "calendrier", component : CalendrierComponent, canActivate:[ArtisanAuthGuard]},
          { path : "almost-done", component : ArtisanSignUpFinalComponent, canActivate:[ArtisanAuthGuard]},
          { path : "metiers", component : ArtisanMetierComponent, canActivate:[ArtisanAuthGuard]}
    ]
  },
  { path : "artisanRef", component : ArtisanrefComponent,
  canActivate: [AllAuthGuard],
  children:[
    { path : "", redirectTo: '/artisanRef/profil', pathMatch:"full"},
    { path : "profil", component : ArtisanrefProfilComponent, canActivate:[ArtisanRefAuthGuard]},
    { path : "list-artisan", component : ArtisanrefArtisanListComponent, canActivate:[ArtisanRefAuthGuard]},
    { path : 'profil-artisan/:id', component : ArtisanrefArtisanProfilComponent, canActivate:[ArtisanRefAuthGuard]},
    
]
},
  { path : "client", component : ClientComponent, 
  canActivate: [AllAuthGuard],
  children:[
    { path : "", redirectTo:"/client/sign-in",pathMatch:"full"},
    { path : "sign-in", component : ClientSignInComponent, canActivate:[ClientAuthGuard]},
    { path : "home", component : ClientHomeComponent, canActivate:[ClientAuthGuard]},
    { path : "sign-up", component : ClientSignUpComponent, canActivate:[ClientAuthGuard]},
    {path :  "profil", component : ClientHomeComponent, canActivate:[ClientAuthGuard]},
    {path :  "artisan-list", component : ClientArtisanListComponent, canActivate:[ClientAuthGuard]},
    {path :  "artisan-profil/:id", component : ClientArtisanProfilComponent, canActivate:[ClientAuthGuard]}
  ]
},
  { path : "admin", component : AdminComponent, 
  canActivate: [AllAuthGuard],
  children: [
    { path : "", redirectTo : "/admin/sign-in",pathMatch:"full"},
    { path : "home", component : AdminHomeComponent ,canActivate:[AdminAuthGuard] },
    { path : "sign-in", component : AdminSignInComponent,canActivate:[AdminAuthGuard] },
    { path : "list-artisan", component : AdminArtisanListComponent,canActivate:[AdminAuthGuard] },
    { path : 'profil-artisan/:id', component : AdminArtisanProfilComponent,canActivate:[AdminAuthGuard] },
    { path : 'list-client', component : AdminClientListComponent,canActivate:[AdminAuthGuard] },
    { path : 'metiers', component : AdminMetiersComponent,canActivate:[AdminAuthGuard] },
    { path : 'services', component : AdminServicesComponent,canActivate:[AdminAuthGuard] },
    { path : 'notifications', component : AdminNotificationsComponent,canActivate:[AdminAuthGuard] },
    { path : 'paiements', component : AdminPaymentsComponent,canActivate:[AdminAuthGuard]},
    { path : 'paiement-details/:id',component:AdminPaymentDetailsComponent,canActivate:[AdminAuthGuard]}
    ]
  },
  { path : "EmailValidationArtisan/:token", component : EmailValidationComponent},
  { path : "EmailValidationClient/:token", component : EmailValidationClientComponent},
  { path : "ForgotPassword",component:ForgotPasswordComponent},
  { path : "ResetPassword/:token", component : ResetPasswordComponent },
  { path : "EmailValidation/:token", component : EmailValidationComponent}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
