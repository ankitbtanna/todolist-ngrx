import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todolist-ngrx-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {}
