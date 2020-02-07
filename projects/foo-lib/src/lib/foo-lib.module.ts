import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [FooLibComponent, GridComponent],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [FooLibComponent, GridComponent]
})
export class FooLibModule { }
