import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor(private titleService: Title) {
    this.titleService.setTitle('CompassGrain - Faq');
  }

  ngOnInit(): void {
  }
}
