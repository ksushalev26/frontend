import { NgModule } from '@angular/core';

import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-lazy', component: TestComponent
  }
]

@NgModule({
  declarations: [TestComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [TestComponent]
})
export class SecondModule { }
