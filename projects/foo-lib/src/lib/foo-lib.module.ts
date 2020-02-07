import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FooLibComponent],
  imports: [
    MatButtonModule
  ],
  exports: [FooLibComponent]
})
export class FooLibModule { }
