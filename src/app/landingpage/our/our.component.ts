import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - About Us');
  }

  ngOnInit(): void {
  }
}
