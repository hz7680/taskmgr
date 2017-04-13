import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { services } from '../services';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { 
    path: 'todos', 
    component: TodoComponent,
    canActivate: [ services.auth_guard ],
    canLoad: [ services.auth_guard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }