import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { PaginationTableComponent } from './views/pagination-table/pagination-table.component';
import { TransactionsService } from './core/services';
import { StoreModule } from '@ngrx/store';
import { paginationReducer } from './core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    PaginationTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    StoreModule.forFeature('Pagination', paginationReducer),
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [TransactionsService],
  exports: [PaginationTableComponent, HttpClientModule]
})
export class PaginationExampleModule { }
