import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Todo,
  TodoStatus,
  activeTodosCountSelector,
  completeTodosCountSelector,
  newTodosCountSelector,
  postponedTodosCountSelector,
  todoListManageActions,
  todoSelector,
} from '@todolist-ngrx/state';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'todolist-ngrx-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  title = 'todolist-ngrx';

  todoForm = new FormGroup({
    id: new FormControl<string>('', [Validators.required]),
    todo: new FormControl<string>('', [Validators.required]),
    status: new FormControl<TodoStatus>(TodoStatus.NEW, [Validators.required]),
    date: new FormControl<string>('', [Validators.required]),
  });

  todos: Todo[] = [];

  todos$ = this.store.select(todoSelector).pipe(shareReplay());
  newTodosCount$ = this.store.select(newTodosCountSelector);
  activeTodosCount$ = this.store.select(activeTodosCountSelector);
  completeTodosCount$ = this.store.select(completeTodosCountSelector);
  postponedTodosCount$ = this.store.select(postponedTodosCountSelector);

  constructor(private store: Store) {}

  addTodo() {
    this.todoForm.controls.id.setValue(crypto.randomUUID());
    this.todoForm.controls.status.setValue(TodoStatus.NEW);
    this.todoForm.controls.date.setValue(new Date().toISOString());

    const todo = {
      ...(this.todoForm.value as Todo),
    };

    this.todos.push(todo);

    this.store.dispatch(todoListManageActions.add({ todo }));

    this.todoForm.reset();
  }

  markTodoAsNew(id: string): void {
    this.store.dispatch(todoListManageActions.new({ id }));
  }

  markTodoAsActive(id: string): void {
    this.store.dispatch(todoListManageActions.active({ id }));
  }

  markTodoAsComplete(id: string): void {
    this.store.dispatch(todoListManageActions.complete({ id }));
  }

  markTodoAsPostponed(id: string): void {
    this.store.dispatch(todoListManageActions.postpone({ id }));
  }
}
