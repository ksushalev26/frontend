import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
  {
    path: 'create', component: CreateComponent, pathMatch: 'full'
  },
  {
    path: 'delete', component: DeleteComponent, pathMatch: 'full'
  },
  // {
  //   path: 'read/:id', component: ReadComponent, pathMatch: 'full'
  // },
  {
    path: 'update/:id', component: UpdateComponent, pathMatch: 'full'
  },
  {
    path: '', component: UsersComponent, pathMatch: 'full'
  } 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
