import { Component, OnInit } from '@angular/core';
import { TransactionsFacade } from '../facade';
import { tap } from 'rxjs';
import { PaginationResponse, TransactionsResponse } from 'src/app/services/types';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.css']
})
export class PaginationTableComponent implements OnInit {
  /**
   *
   */
  transactions?: TransactionsResponse[] = [];
  constructor(private transactionsFacade: TransactionsFacade) {}

  ngOnInit() {
    this.transactionsFacade.initializeTransactions()
    .pipe(
      tap(response => 
        {
          this.handleTransactions(response) 
        })
    ).subscribe();
  }

  private handleTransactions(pagination: PaginationResponse) {
    this.transactions = pagination.data;
  }
}
