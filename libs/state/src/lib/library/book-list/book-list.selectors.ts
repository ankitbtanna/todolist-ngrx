import { Book } from '../models/books.model';
import { createFeatureSelector } from '@ngrx/store';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
