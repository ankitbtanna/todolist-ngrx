import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from './models/todo.models';

export const todoSelector = createSelector(
  createFeatureSelector<Array<Todo>>('todos'),
  (todos) => todos
);
