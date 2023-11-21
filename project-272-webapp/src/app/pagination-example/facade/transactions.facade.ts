import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { map, catchError } from "rxjs/operators";
import { TransactionsService } from "src/app/services/transactions.service";
import { PaginationResponse, TransactionsRequest, TransactionsResponse } from "src/app/services/types";

@Injectable({
    providedIn: 'root',
})

export class TransactionsFacade {
    /**
     *
     */
    constructor(private transactionService: TransactionsService) {}

    initializeTransactions(): Observable<PaginationResponse> {
        let request: TransactionsRequest = {
            locationsId: 1,
            page: 1,
            userId: 1
        };
       return this.transactionService.getTransactions(request).pipe(
            map(response => this.handleScuccessResponse(response)),
            catchError((error: HttpErrorResponse) => this.handleFailedResponse(error))
        );
    }

    handleScuccessResponse(response: PaginationResponse): PaginationResponse {
        let test: PaginationResponse = {};
        test = response;
        return test;
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