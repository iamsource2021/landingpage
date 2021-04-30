import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-descargo',
  templateUrl: './descargo.component.html',
  styleUrls: ['./descargo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescargoComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }
}
