import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PaginationResponse, TransactionsRequest } from "./types";
import { Observable } from "rxjs";
import { BaseService } from "src/app/core";

@Injectable()

export class TransactionsService extends BaseService {
    constructor(http: HttpClient) {
        super(http, 'transactions')
    }

    getTransactions(request: TransactionsRequest): Observable<PaginationResponse> {
        return this.getExternal(`search?userid=${request.userId}&page=${request.page}`);
    }
}