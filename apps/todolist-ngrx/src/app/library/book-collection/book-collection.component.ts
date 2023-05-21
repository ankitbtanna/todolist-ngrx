import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Book } from '@todolist-ngrx/state';

@Component({
  selector: 'todolist-ngrx-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCollectionComponent {
  @Input() books: Array<Book> = [];
  @Output() remove = new EventEmitter<string>();

  removeBook(book: Book) {
    this.remove.emit(book.id);
  }
}
