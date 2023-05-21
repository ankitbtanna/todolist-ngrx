import { createReducer, on } from '@ngrx/store';

import { ACTIONS } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(ACTIONS.INCREMENT, increment),
  on(ACTIONS.DECREMENT, decrement),
  on(ACTIONS.RESET, reset)
);

function increment(state: number): number {
  return state + 1;
}

function decrement(state: number): number {
  return state - 1;
}

function reset(): number {
  return 0;
}
