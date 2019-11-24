import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

export const usersRouting = [
  { path: '', component: UsersComponent }
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [UsersComponent],
  providers: [],
})
export class UsersModule { }
