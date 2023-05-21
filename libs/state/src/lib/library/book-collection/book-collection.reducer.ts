import { Book } from '../models/books.model';
import { createReducer } from '@ngrx/store';

const initialState: Array<Book> = [];

export const bookCollectionReducer = createReducer(initialState);
