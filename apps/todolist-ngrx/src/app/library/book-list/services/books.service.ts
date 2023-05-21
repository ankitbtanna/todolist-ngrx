import { Observable, map } from 'rxjs';

import { Book } from '../../../../../../../libs/state/src/lib/library/models/books.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=coding'
      )
      .pipe(
        map((data) => {
          return data.items || [];
        })
      );
  }
}
