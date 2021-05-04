import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesComponent implements OnInit {

  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Cookies');
  }

  ngOnInit(): void {
  }

}
