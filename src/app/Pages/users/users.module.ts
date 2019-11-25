import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';

export const usersRouting = [
  { path: '', component: UsersComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRouting)
  ],
  exports: [],
  declarations: [UsersComponent],
  providers: [],
})
export class UsersModule { }
