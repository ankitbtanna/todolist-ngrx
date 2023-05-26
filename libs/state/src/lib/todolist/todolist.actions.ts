import { createAction, createActionGroup, props } from '@ngrx/store';

import { Todo } from './models/todo.models';

export const getTodos = createAction('[TodoList] Get');

export const todoListManageActions = createActionGroup({
  source: '[TodoList] Manage',
  events: {
    Add: props<{ todo: Todo }>(),
    Delete: props<{ id: string }>(),
    New: props<{ id: string }>(),
    Active: props<{ id: string }>(),
    Complete: props<{ id: string }>(),
    Postpone: props<{ id: string }>(),
  },
});
