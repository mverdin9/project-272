import { Injectable } from "@angular/core";
import { BaseService } from "../core/base.service";
import { HttpClient } from "@angular/common/http";
import { PaginationResponse, TransactionsRequest } from "./types";
import { Observable } from "rxjs";

@Injectable()

export class TransactionsService extends BaseService {
    constructor(http: HttpClient) {
        super(http, 'transactions')
    }

    getTransactions(request: TransactionsRequest): Observable<PaginationResponse> {
        return this.getExternal<PaginationResponse>(`search?userid=${request.userId}&locationId=${request.locationsId}&page=${request.page}`);
    }
}