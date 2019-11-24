import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule } from '@angular/router';

export const todosRouting = [
  { path: '', component: TodosComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(todosRouting)
  ],
  exports: [RouterModule],
  declarations: [TodosComponent],
  providers: [],
})
export class TodosModule { }
