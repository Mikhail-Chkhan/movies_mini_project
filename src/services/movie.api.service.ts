import {MoviesResponse} from "@/models/MoviesResponse";
import IMovieDetail from "@/models/IMovieDetail";
import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";

export const moviesService = {
    getAllMovies: async (): Promise<MoviesResponse> => {
        const response = await fetch(urls.movies.base,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: BearerToken
                }
            }).then(response => response.json());

        return response;
    },


    getMovieById: async (id: string): Promise<IMovieDetail> => {
        const response = await fetch(urls.movies.byId(id),
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: BearerToken
                }});
        return await response.json();
    }
};
