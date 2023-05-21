import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { bookCollectionReducer } from './library/book-collection/book-collection.reducer';
import { bookListReducer } from './library/book-list/book-list.reducer';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      count: counterReducer,
      collection: bookCollectionReducer,
      books: bookListReducer,
    }),
  ],
})
export class ApplicationStateModule {}
