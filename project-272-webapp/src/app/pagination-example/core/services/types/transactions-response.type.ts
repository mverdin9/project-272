import { LocationResponse } from "./location-response.type"
export type TransactionsResponse = {
    id?: number,
    userId?: number,
    userName?: string,
    timestamp?: number,
    txnType?: string,
    amount?: number,
    location?: LocationResponse,
    ip?: string,
}