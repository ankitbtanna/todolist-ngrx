import { Todo, TodoStatus } from './models/todo.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoSelector = createFeatureSelector<Array<Todo>>('todos');

export const newTodosCountSelector = createSelector(
  todoSelector,
  (todos) => todos.filter((todo) => todo.status === TodoStatus.NEW).length
);

export const activeTodosCountSelector = createSelector(
  todoSelector,
  (todos) => todos.filter((todo) => todo.status === TodoStatus.ACTIVE).length
);

export const completeTodosCountSelector = createSelector(
  todoSelector,
  (todos) => todos.filter((todo) => todo.status === TodoStatus.COMPLETE).length
);

export const postponedTodosCountSelector = createSelector(
  todoSelector,
  (todos) => todos.filter((todo) => todo.status === TodoStatus.POSTPONED).length
);
