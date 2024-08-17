import React from 'react';
import {moviesService} from "@/services/movie.api.service";
import MovieInfo from "@/components/MovieInfo/MovieInfo";

type Params = { id: string };
const MoviesPage = async ({params}: { params: Params }) => {
    let movie = await moviesService.getMovieById(params.id);
    return (
        <div>
            {<MovieInfo movie={movie}/>}
        </div>
    );
};

export default MoviesPage;
