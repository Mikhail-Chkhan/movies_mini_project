import {MoviesResponse} from "@/models/MoviesResponse";
import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";
import IMovieDetail from "@/models/IMovieDetail";
import IFilterMovies from "@/models/IFilterMovies";
import ISearchModel from "@/models/ISearchModel";
import {generateQueryParams} from "@/helpers/helperForMovieServise";

export const moviesService = {
    getMovies: async (filters?: IFilterMovies): Promise<MoviesResponse> => {
        const queryParams = generateQueryParams(filters);  //хелпер
        const url = `${urls.movies.base}?${queryParams.toString()}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: BearerToken
            }
        }).then(response => response.json());
        return response;
    },

    getMoviesAfterSearch: async (filters?:ISearchModel): Promise<MoviesResponse> => {
        const queryParams = generateQueryParams(filters);  //хелпер
        const url = `${urls.movies.search}?${queryParams.toString()}`;
        // console.log(url)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: BearerToken
            }
        }).then(response => response.json());
        return response;
    },

    getMovieById: async (id: string): Promise<IMovieDetail> => {
        const response = await fetch(urls.movies.byId(id), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: BearerToken
            }
        });
        return await response.json();
    }
};