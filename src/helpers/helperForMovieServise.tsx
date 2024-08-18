import ISearchModel from "@/models/ISearchModel";
import IFilterMovies from "@/models/IFilterMovies";

export const generateQueryParams = (
    searchModel?: ISearchModel | undefined,
    filterMovies?: IFilterMovies| undefined
): URLSearchParams => {

    const queryParams = new URLSearchParams();

    const combinedFilters = {
        ...searchModel,
        ...filterMovies
    };

    Object.entries(combinedFilters).forEach(([key, value]) => {
        if (value !== undefined) {
            queryParams.append(key, value.toString());
        }
    });

    return queryParams;
};
