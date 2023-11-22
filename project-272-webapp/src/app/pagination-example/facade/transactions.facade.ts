import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { TransactionsService } from "../core/services/transactions.service";
import { PaginationResponse, TransactionsRequest } from "../core/services";
import { Store } from "@ngrx/store";
import { PaginationDataState, PaginationState, addPagination, getPaginations, getSelectedPagePagination } from "../core";

@Injectable({
    providedIn: 'root',
})

export class TransactionsFacade {
    getPaginationState$ = this.store.select(getPaginations);
    constructor(
        private store: Store<PaginationState>, 
        private transactionService: TransactionsService
    ) {}

    changePage(transactionRequest: TransactionsRequest) {
        let request: TransactionsRequest = {
            page: transactionRequest.page,
            userId: transactionRequest.userId
        };
       this.transactionService.getTransactions(request).subscribe({
        next: response => {
            this.handleScuccessResponse(response);
        },
        error: errorResponse => {
            this.handleFailedResponse(errorResponse);
        }
       });
    }

    handleScuccessResponse(response: PaginationResponse) {
        const paginationDataState: PaginationDataState = {
            data: response.data,
            page: response.page,
            total_pages: response.total_pages,
            userId: 1
        };

        this.store.dispatch(addPagination({ payload: paginationDataState }));
    }

    handleFailedResponse(errorResponse: HttpErrorResponse): Observable<PaginationResponse> {
        let errorCall = errorResponse.error.statusCode <= 500;
        if (errorCall)
        {
            alert('error');
        }
        const errorT: PaginationResponse = {};
        return of(errorT);
    }
}