import { PaginationDataState } from "./pagination-data-state.type";

export type PaginationState = {
    page: number | undefined;
    dataPagination: PaginationDataState[];
}

export const initializePaginationState: PaginationState = {
    page: undefined,
    dataPagination: [],
}