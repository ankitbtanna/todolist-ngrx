import { Todo, TodoStatus } from './models/todo.models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoSelector = createFeatureSelector<Array<Todo>>('todos');

export const allTodosCountSelector = createSelector(
  todoSelector,
  (todos) => todos.length
);

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

export const newTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.NEW)
);

export const activeTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.ACTIVE)
);

export const completeTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.COMPLETE)
);

export const postponedTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.status === TodoStatus.POSTPONED)
);
