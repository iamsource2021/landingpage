import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesComponent implements OnInit {

  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

}
