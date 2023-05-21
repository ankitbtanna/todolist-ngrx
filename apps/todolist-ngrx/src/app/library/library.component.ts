import {
  Book,
  BookActions,
  selectBookCollection,
  selectBooks,
} from '@todolist-ngrx/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { defaultIfEmpty } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'todolist-ngrx-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent {
  books$ = this.store.select(selectBooks).pipe(defaultIfEmpty([]));

  bookCollection$ = this.store
    .select<Book[]>(selectBookCollection)
    .pipe(defaultIfEmpty([]));

  constructor(private store: Store) {}

  addBook(bookId: string): void {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  removeBook(bookId: string): void {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }
}
