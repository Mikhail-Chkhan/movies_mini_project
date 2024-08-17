import React, {FC} from 'react';
import IMovieDetail from "@/models/IMovieDetail";
import styles from "@/components/MoviesListCard/MoviesListCard.module.css";
import {urls} from "@/constants/urls";

interface MovieInfoProps {
    movie: IMovieDetail;
}

// const placeholderImage = 'ErrorImages.jpg';
const MovieInfo: FC<MovieInfoProps> = ({movie}) => {


    // const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     event.currentTarget.src = placeholderImage;
    // };


    return (
        <div>

            <div>
                <div>

                    {/*<p>{`${urls.images.base}${movie.poster_path}`}</p>*/}

                    <img
                        // className={styles.borderPoster}
                        src={`${urls.images.base}${movie.poster_path}`}
                        alt={movie.title}
                        // onError={handleImageError}
                    />

                    <p>Rating: {movie.vote_average}</p>
                </div>

                <div>
                    <h2>{movie.title}</h2>
                    <p>runtime: {movie.runtime} minutes</p>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p>{movie.overview}</p>
            </div>


        </div>
    );

}
export default MovieInfo;
