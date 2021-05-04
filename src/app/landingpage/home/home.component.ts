import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Home');
  }

  ngOnInit(): void {
  }
}
