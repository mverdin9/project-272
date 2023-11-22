import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PaginationState } from "../types";

const getPagationState = createFeatureSelector<PaginationState>('Pagination');
const getPagationStates = createFeatureSelector<PaginationState>('Pagination');

export const getSelectedPagePagination = createSelector(getPagationState, state => {
    if (state.page === undefined) 
    {
        return undefined;
    }

    return state.dataPagination.find(x => x.page === state.page) ?? undefined;
});

export const getPaginations = createSelector(getPagationStates, state => state);