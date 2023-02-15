import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { TodoStatus } from './todo.const';

@Component({
  selector: 'todolist-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist-ngrx';

  todoForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    todo: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  todos: any[] = [];

  addTodo() {
    this.todoForm.controls.id.setValue(crypto.randomUUID());
    this.todoForm.controls.status.setValue(TodoStatus.NEW);
    this.todoForm.controls.date.setValue(new Date().toISOString());

    console.log(this.todoForm.value);

    this.todos.push(this.todoForm.value as any);

    this.todoForm.reset();
  }
}
