import {MoviesResponse} from "@/models/MoviesResponse";
import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";
import IMovieDetail from "@/models/IMovieDetail";
import IFilterMovies from "@/models/IFilterMovies";
import ISearchModel from "@/models/ISearchModel";

export const moviesService = {
    getMovies: async (filters?:IFilterMovies): Promise<MoviesResponse> => {
// _________________Сделать хелпер_____________________//
        const queryParams = new URLSearchParams();

        if (filters) {

            Object.entries(filters).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }
// ___________________________________________________//
        const url = `${urls.movies.base}?${queryParams.toString()}`;
        console.log(url)

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
// _________________Сделать хелпер_____________________//
        const queryParams = new URLSearchParams();
        if (filters) {

            Object.entries(filters).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }
// ___________________________________________________//
        const url = `${urls.movies.search}?${queryParams.toString()}`;
        console.log(url)

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