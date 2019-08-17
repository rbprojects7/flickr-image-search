export interface SearchItem {
    readonly name?: string;
    readonly src?: string;
}

export type Results = ReadonlyArray<SearchItem>

export default interface SearchResultsState {
    readonly results?: Results;
    readonly page?: number;
    readonly totalPages?: number;
    readonly query?: string;
    readonly loading?: boolean;
}
