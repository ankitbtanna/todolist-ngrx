import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Book } from '@todolist-ngrx/state';
import { BooksApiActions } from '@todolist-ngrx/state';
import { BooksService } from './services/books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todolist-ngrx-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit, OnDestroy {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

  private destroyed$ = new Subject<boolean>();

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    console.log('came here');
    this.booksService
      .getBooks()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((books) => {
        console.log(books);
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  addBook(book: Book) {
    this.add.emit(book.id);
  }
}
