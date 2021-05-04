import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-descargo',
  templateUrl: './descargo.component.html',
  styleUrls: ['./descargo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescargoComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Disclaimer');
  }

  ngOnInit(): void {
  }
}
