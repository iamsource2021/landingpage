import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-regulacion',
  templateUrl: './regulacion.component.html',
  styleUrls: ['./regulacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegulacionComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }
}
