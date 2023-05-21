import { createAction } from '@ngrx/store';

const INCREMENT = createAction('[Counter Component] Increment');
const DECREMENT = createAction('[Counter Component] Decrement');
const RESET = createAction('[Counter Component] Reset');

export const ACTIONS = {
  INCREMENT,
  DECREMENT,
  RESET,
};
