import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('../pages/todo-create/todo-create.module').then( m => m.TodoCreatePageModule)
  },
  {
    path: ':todo',
    loadChildren: () => import('../pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
