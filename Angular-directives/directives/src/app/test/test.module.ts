import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    SomeComponent,
    BoldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomeComponent
  ]
})
export class TestModule { }
