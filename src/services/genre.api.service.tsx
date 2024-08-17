import {urls} from "@/constants/urls";
import {BearerToken} from "@/constants/BearerToken";
import IGenre from "@/models/IGenre";
import React from "react";


type GenreProps = { genres: IGenre[] }
export const genresService = {
    getAllGenres: async (): Promise<GenreProps> => {
        const response = await fetch(urls.genres.base,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: BearerToken
                }
            }).then(response => response.json());
        return response;
    },
};
