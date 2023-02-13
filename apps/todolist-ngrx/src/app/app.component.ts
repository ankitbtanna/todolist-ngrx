import { Component } from '@angular/core';

@Component({
  selector: 'todolist-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist-ngrx';

  todos = [
    ...Array.from({ length: 30 }, (_, i) => ({
      title: `Todo ${i}`,
      completed: false,
    })),
  ];
}
