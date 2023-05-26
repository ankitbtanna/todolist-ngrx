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
  on(todoListManageActions.new, markTodoStatus(TodoStatus.NEW)),
  on(todoListManageActions.active, markTodoStatus(TodoStatus.ACTIVE)),
  on(todoListManageActions.complete, markTodoStatus(TodoStatus.COMPLETE)),
  on(todoListManageActions.postpone, markTodoStatus(TodoStatus.POSTPONED))
);

function markTodoStatus(status: TodoStatus) {
  return (state: Array<Todo>, { id }: { id: string }): Array<Todo> => {
    const todoIndex = state.findIndex((todo) => todo.id === id);

    if (state[todoIndex].status === status) {
      console.log(`it's already in ${status} state!`);
      return [...state];
    }

    return state.map((todo, index) => {
      if (index === todoIndex) {
        console.log(`marking ${status}`);
        return { ...todo, status };
      } else {
        return { ...todo };
      }
    });
  };
}
