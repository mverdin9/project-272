import { Observable } from "rxjs";

export interface ServiceResult<T = any> {
    data: T;

    message: string;

    status: 'success' | 'fail' | 'error';

    statusCode: number;
}

export type WebApiResponse<T> = Observable<ServiceResult<T>>;