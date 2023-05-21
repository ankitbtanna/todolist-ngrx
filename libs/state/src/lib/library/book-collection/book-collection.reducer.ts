import { createReducer, on } from '@ngrx/store';

import { BookActions } from './book-collection.actions';

const initialState: Array<string> = [];

export const bookCollectionReducer = createReducer(
  initialState,
  on(BookActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BookActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
    return [...state, bookId];
  })
);
