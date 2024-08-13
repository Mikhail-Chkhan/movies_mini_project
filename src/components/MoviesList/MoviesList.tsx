import {moviesService} from "@/services/movie.api.service";
import IMovie from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";


const MoviesList = async () => {

    let movies: Promise<IMovie[]> = moviesService.getAllMovies().then(response => response.results);

    return (
        <div>

            {(await movies).map((movie) => (
                <MoviesListCard
                    key={movie.id}
                    movie={movie}/>))}
        </div>
    )
};

export default MoviesList;