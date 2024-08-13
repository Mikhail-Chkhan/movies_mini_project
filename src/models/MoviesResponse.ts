import {PaginatedPageModel} from "./PaginatedPageModel";
import IMovie from "@/models/IMovie";

export interface MoviesResponse {
    page:number,
    results:IMovie[],
    total_pages: number
    total_results: number
}