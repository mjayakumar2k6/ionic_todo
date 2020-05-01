import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoCreatePage } from './todo-create.page';

const routes: Routes = [
  {
    path: '',
    component: TodoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoCreatePageRoutingModule {}
