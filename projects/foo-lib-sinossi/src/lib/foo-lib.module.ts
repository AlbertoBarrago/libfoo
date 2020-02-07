import { NgModule } from '@angular/core';
import { FooLibComponent } from './foo-lib.component';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { GridComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [FooLibComponent, GridComponent, ButtonComponent],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule
  ],
  exports: [GridComponent, ButtonComponent]
})
export class FooLibModule { }
