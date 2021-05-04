import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacidadComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Privacy');
  }

  ngOnInit(): void {
  }
}
