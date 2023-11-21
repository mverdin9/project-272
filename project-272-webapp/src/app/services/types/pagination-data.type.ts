import { TransactionsResponse } from "./transactions-response.type"

export type PaginationResponse = {
    data?: TransactionsResponse[],
    page?: number,
    per_page?: number,
    total?: number,
    total_pages?: number,
}