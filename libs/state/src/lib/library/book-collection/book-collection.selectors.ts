import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Book } from '../models/books.model';
import { selectBooks } from '../book-list/book-list.selectors';

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) =>
      books.find((book) => book.id === id)
    ) as Book[];
  }
);
