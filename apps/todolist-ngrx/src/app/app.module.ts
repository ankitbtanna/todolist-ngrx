import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationStateModule } from '@todolist-ngrx/state';
import { BookCollectionComponent } from './library/book-collection/book-collection.component';
import { BookListComponent } from './library/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { LibraryComponent } from './library/library.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent,
    LibraryComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ApplicationStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
