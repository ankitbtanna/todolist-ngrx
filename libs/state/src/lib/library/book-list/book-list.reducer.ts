import { createReducer, on } from '@ngrx/store';

import { Book } from '../models/books.model';
import { BooksApiActions } from './book-list.actions';

const initialState: Array<Book> = [];

export const bookListReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => {
    return books;
  })
);
