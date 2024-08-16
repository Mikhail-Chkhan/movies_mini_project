import {MoviesResponse} from "@/models/MoviesResponse";
import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";
import IMovieDetail from "@/models/IMovieDetail";
import IFilterMovies from "@/models/IFilterMovies";

export const moviesService = {
    getMovies: async (filters?:IFilterMovies): Promise<MoviesResponse> => {//доделать тут объект
        const queryParams = new URLSearchParams();

        if (filters) {
            // Преобразуем `filters` в строковые параметры для URL
            Object.entries(filters).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }
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