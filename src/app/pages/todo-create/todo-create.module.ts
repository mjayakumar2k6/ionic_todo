import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoCreatePageRoutingModule } from './todo-create-routing.module';

import { TodoCreatePage } from './todo-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoCreatePageRoutingModule
  ],
  declarations: [TodoCreatePage]
})
export class TodoCreatePageModule {}
