import { Todo, TodoStatus } from './models/todo.models';
import { createReducer, on } from '@ngrx/store';

import { todoListManageActions } from './todolist.actions';

const initialState: Array<Todo> = [];

export const addTodoReducer = createReducer(
  initialState,
  on(todoListManageActions.add, (state, { todo }) => [...state, todo]),
  on(todoListManageActions.delete, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(todoListManageActions.new, markTodoAsNew),
  on(todoListManageActions.active, markTodoAsActive),
  on(todoListManageActions.complete, markTodoAsComplete),
  on(todoListManageActions.postpone, markTodoAsPostponed)
);

function markTodoAsNew(
  state: Array<Todo>,
  { id }: { id: string }
): Array<Todo> {
  const todoIndex = state.findIndex((todo) => todo.id === id);

  if (state[todoIndex].status === TodoStatus.NEW) {
    console.log("it's already in new state!");
    return [...state];
  }

  return state.map((todo, index) => {
    if (index === todoIndex) {
      console.log('marking new');
      return { ...todo, status: TodoStatus.NEW };
    } else {
      return { ...todo };
    }
  });
}

function markTodoAsActive(state: Array<Todo>, { id }: { id: string }) {
  const todoIndex = state.findIndex((todo) => todo.id === id);

  if (state[todoIndex].status === TodoStatus.ACTIVE) {
    console.log("it's already in active state!");
    return [...state];
  }

  return state.map((todo, index) => {
    if (index === todoIndex) {
      console.log('marking active');
      return { ...todo, status: TodoStatus.ACTIVE };
    } else {
      return { ...todo };
    }
  });
}

function markTodoAsComplete(state: Array<Todo>, { id }: { id: string }) {
  const todoIndex = state.findIndex((todo) => todo.id === id);

  if (state[todoIndex].status === TodoStatus.COMPLETE) {
    console.log("it's already in complete state!");
    return [...state];
  }

  return state.map((todo, index) => {
    if (index === todoIndex) {
      console.log('marking complete');
      return { ...todo, status: TodoStatus.COMPLETE };
    } else {
      return { ...todo };
    }
  });
}

function markTodoAsPostponed(state: Array<Todo>, { id }: { id: string }) {
  const todoIndex = state.findIndex((todo) => todo.id === id);

  if (state[todoIndex].status === TodoStatus.POSTPONED) {
    console.log("it's already in postponed state!");
    return [...state];
  }

  return state.map((todo, index) => {
    if (index === todoIndex) {
      console.log('marking postponed');
      return { ...todo, status: TodoStatus.POSTPONED };
    } else {
      return { ...todo };
    }
  });
}
