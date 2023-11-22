import { Action, createReducer, on } from "@ngrx/store";
import { PaginationState, initializePaginationState } from "../types";
import { addPagination } from "../pagination.actions";

const reducer = createReducer(
    initializePaginationState,
    on(addPagination, (_state, action) => {
        if (!_state.dataPagination.findIndex(x => x.page === action.payload.page)) {
            return {
                page: action.payload.page,
                dataPagination: [..._state.dataPagination],
            };
        }

        return {
            page: action.payload.page,
            dataPagination: [..._state.dataPagination, action.payload],
        };
    })
);

export function paginationReducer(state: PaginationState, action: Action){
    return reducer(state, action);
}