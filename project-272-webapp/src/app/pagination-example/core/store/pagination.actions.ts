import { createAction, props } from "@ngrx/store";
import { PaginationDataState } from "./types";

export const addPagination = createAction(
    '[Pagination] AddPagination',
     props<{ payload: PaginationDataState}>()
);