import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Route[] = [
  {
    path: 'one', component: OneComponent, children: [
      {
        path: 'two/:id', component: TwoComponent, pathMatch: 'full'
      }
    ]
  },
  {
    path: 'my-lazy', loadChildren: '../second/second.module#SecondModule'
  },
  {
    path:'**', component: NotFoundComponent
  }  
];

@NgModule({  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
