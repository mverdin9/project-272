import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { TransactionsService } from '../services/transactions.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    PaginationTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [TransactionsService],
  exports: [PaginationTableComponent, HttpClientModule]
})
export class PaginationExampleModule { }
