import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingpageComponent } from './landingpage.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LearnComponent } from './learn/learn.component';
import { OurComponent } from './our/our.component';
import { DescargoComponent } from './descargo/descargo.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { RegulacionComponent } from './regulacion/regulacion.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmsignupComponent } from './confirmsignup/confirmsignup.component';

@NgModule({
  declarations: [
    LandingpageComponent,
    HomeComponent,
    FaqComponent,
    LearnComponent,
    OurComponent,
    DescargoComponent,
    PrivacidadComponent,
    CookiesComponent,
    RegulacionComponent,
    SignupComponent,
    ConfirmsignupComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        closeButton:true,
        progressBar:true,
        autoDismiss:false,
        timeOut:9000,
        positionClass: 'toast-top-right'
      }
    )
  ],
  exports: [
    LandingpageComponent,
    HomeComponent,
    FaqComponent,
    LearnComponent,
    OurComponent,
    DescargoComponent,
    PrivacidadComponent,
    CookiesComponent,
    RegulacionComponent,
    SignupComponent,
    ConfirmsignupComponent
  ]
})
export class LandingpageModule { }
