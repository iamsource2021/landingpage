import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-regulacion',
  templateUrl: './regulacion.component.html',
  styleUrls: ['./regulacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegulacionComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Commercial Regulation');
  }

  ngOnInit(): void {
  }
}
