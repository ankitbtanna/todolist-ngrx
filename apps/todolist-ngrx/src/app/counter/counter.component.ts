import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ACTIONS } from '@todolist-ngrx/state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todolist-ngrx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<{
      count: number;
    }>
  ) {
    this.count$ = store.select('count');
  }

  increment(): void {
    this.store.dispatch(ACTIONS.INCREMENT());
  }

  decrement(): void {
    this.store.dispatch(ACTIONS.DECREMENT());
  }

  reset(): void {
    this.store.dispatch(ACTIONS.RESET());
  }
}
