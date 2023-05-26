import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addTodoReducer } from './todolist/todolist.reducer';
import { bookCollectionReducer } from './library/book-collection/book-collection.reducer';
import { bookListReducer } from './library/book-list/book-list.reducer';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      count: counterReducer,
      collection: bookCollectionReducer,
      books: bookListReducer,
      todos: addTodoReducer,
    }),
  ],
})
export class ApplicationStateModule {}
