import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LearnComponent } from './learn/learn.component';
import { OurComponent } from './our/our.component';
import { DescargoComponent } from './descargo/descargo.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { RegulacionComponent } from './regulacion/regulacion.component';

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
    RegulacionComponent
  ],
  imports: [
    CommonModule,
    NgbModule
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
    RegulacionComponent
  ]
})
export class LandingpageModule { }
