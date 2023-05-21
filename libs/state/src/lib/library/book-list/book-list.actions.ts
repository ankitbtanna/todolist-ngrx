import { createActionGroup, props } from '@ngrx/store';

import { Book } from '../models/books.model';

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: Array<Book> }>(),
  },
});
