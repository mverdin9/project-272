import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { TransactionsFacade } from '../../facade';
import { TransactionsResponse } from '../../core/services/types';
import { PaginationDataState, initializePaginationDataState, initializePaginationState } from '../../core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.css']
})
export class PaginationTableComponent implements OnInit, AfterViewInit {
  @ViewChild('inputName') inputName!: ElementRef<HTMLInputElement>;
  totalAmount: number;
  entireDateNumber: number;
  lenght: number;
  pageSize = 10;
  pageIndex = 0;
  pageEvent: PageEvent;
  transactions?: TransactionsResponse[] = []; 
  transactionsToDisplay?: TransactionsResponse[] = [];
  selectedData: string = '';
  paginationData?: PaginationDataState = initializePaginationDataState;
  constructor(private transactionsFacade: TransactionsFacade) {}

  ngOnInit() {
    this.handleData(0);
  }

  ngAfterViewInit() {
    this.listenEvents();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.handleData(e.pageIndex);
  }

  listenEvents()
  {
    fromEvent(this.inputName?.nativeElement, 'keyup').subscribe((text: any) => {
      this.transactionsToDisplay = this.transactions.filter(x => x.userName.toUpperCase().includes(text.target.value.toUpperCase()));
      this.lenght = this.transactionsToDisplay.length;
      if (text.target.value === '' || text.target.value.toUpperCase === undefined || text.target.value === null)
      {
        this.lenght = this.entireDateNumber;
      }
    });
  }

  getTotalAmountPerPage() {
    this.totalAmount = this.transactions.reduce((acc, curr) => {
      return +acc + +curr.amount.toString().split('$')[1].replace(',', '');;
    }, 0);
  }

  private handleData(page: number) {
    this.transactionsFacade.getPaginationState$.subscribe(rest => {
      const dataStored = rest.dataPagination.find(x => x.page === page + 1)
      if (dataStored){
        this.handleTransactions(dataStored); 
      } else {
        this.transactionsFacade.changePage({ page: page + 1, userId: 1 });
      }
      this.getTotalAmountPerPage();
    });
  }

  private handleTransactions(pagination: PaginationDataState) {
    this.lenght = pagination?.total_pages * pagination?.data.length;
    this.entireDateNumber = this.lenght;
    this.paginationData = pagination;
    this.transactions = pagination?.data;
    this.transactionsToDisplay = pagination?.data;
  }
}
