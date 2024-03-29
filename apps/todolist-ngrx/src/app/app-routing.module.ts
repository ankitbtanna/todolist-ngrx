import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "@angular/common";
import { CounterComponent } from './counter/counter.component';
import { LibraryComponent } from './library/library.component';
import { NgModule } from "@angular/core";
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'library', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}