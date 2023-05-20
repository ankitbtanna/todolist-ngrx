import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todolist-ngrx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {}
