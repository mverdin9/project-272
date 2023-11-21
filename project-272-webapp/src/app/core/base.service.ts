import { HttpClient, HttpParams } from '@angular/common/http';
import { ServiceResult, WebApiResponse } from '../shared/models';
import { Observable } from 'rxjs';


export abstract class BaseService {
    protected url: string;

    constructor(protected readonly http: HttpClient, resource: string) {
        this.url = `https://jsonmock.hackerrank.com/api/${resource}`
    }

    protected getApi<T>(
        endpoint: string = '',
        params?: HttpParams | {[param: string]: string | string[]},
    ): WebApiResponse<T> {  
        const requestUrl = endpoint ? `${this.url}/${endpoint}`: this.url;
        return this.http.get<ServiceResult<T>>(requestUrl, {params});
    }

    protected getExternal<T>(
        endpoint: string = '',
        params?: HttpParams | {[param: string]: string | string[]},
    ): Observable<T> {  
        const requestUrl = endpoint ? `${this.url}/${endpoint}`: this.url;
        return this.http.get<T>(requestUrl, {params});
    }
}