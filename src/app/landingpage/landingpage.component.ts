import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { I18n } from "aws-amplify";
import './traslations/languages';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: [
    './landingpage.component.css',
    './../../assets/landingpage-assets/bootstrap/css/bootstrap.min.css',
    './../../assets/landingpage-assets/fonts/font-awesome.min.css',
    './../../assets/landingpage-assets/fonts/material-icons.min.css',
    './../../assets/landingpage-assets/css/styles.min.css',
    './../../assets/landingpage-assets/css/animate.min.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingpageComponent implements OnInit {

  public isCollapsed = true;

  public i18n = I18n;

  public statusChanged = 'home';//home

  public eventEmmiter:landingEvent = {statusChanged:'',data:[]};

  public lange:string = "en-US";

  constructor(private titleService: Title) {
    this.i18n.setLanguage(this.lange);
    this.titleService.setTitle('CompassGrain - Home');
  }

  setLanguageClick(lange:string){
    this.i18n.setLanguage(lange);
    this.lange = lange;
  }
  ngOnInit(): void {
  }

  async statusChangedEvent($event:any){
    this.statusChanged = $event.statusChanged;
    this.eventEmmiter = $event;
  }

  openSection(stage:string){
    this.statusChanged = stage;
  }

  hasDropdown(event:any){
    // console.log(event);
  }
}

export interface landingEvent {
  statusChanged: string;
  data?: object;
}
