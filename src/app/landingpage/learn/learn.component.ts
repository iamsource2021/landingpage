import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnComponent implements OnInit {
  @Output() chageStatusEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }
}
