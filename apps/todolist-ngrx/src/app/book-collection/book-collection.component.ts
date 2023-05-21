import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todolist-ngrx-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCollectionComponent {}
