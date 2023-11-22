import { TransactionsResponse } from "../../services";

export type PaginationDataState = {
    userId: number | undefined;
    data: TransactionsResponse[] | undefined,
    page: number | undefined,
    total_pages: number | undefined,
}

export const initializePaginationDataState: PaginationDataState = {
    userId: undefined,
    data: [],
    page: undefined,
    total_pages: undefined
}