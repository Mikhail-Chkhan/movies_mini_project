import React, {FC} from 'react';
import IMovieDetail from "@/models/IMovieDetail";
import styles from "./MovieInfo.module.css";
import {urls} from "@/constants/urls";
import Link from "next/link";
import GenreBadge from "@/components/GenreBadge/GenreBadge";
import StarRatingClient from "@/components/StarRatingClient/StarRatingClient";


interface MovieInfoProps {
    movie: IMovieDetail;
}

const MovieInfo: FC<MovieInfoProps> = ({movie}) => {
    return (
        <div className={styles.mainBoxMovieDetail}>
            <div className={styles.boxImg}>
                <img
                    className={styles.boxImg}
                    src={`${urls.images.base}${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>

            <div className={styles.boxPoster}>

                <div className={styles.boxCharacteristic}>
                    <h2>{movie.title}</h2>
                    <p className={styles.header}>Duration:</p>
                    <p>{movie.runtime} minutes</p>
                    <p className={styles.header}>Genres:</p>
                    <div className={styles.genresBox}>
                        {movie.genres.map((genre) => (
                            <Link
                                className={styles.linkBox}
                                href={`/genres/${genre.id}`}
                                key={genre.id}
                            >
                                <GenreBadge context={genre.name} color={"#303638"}/>
                            </Link>
                        ))}
                    </div>
                        <div>
                            <p>Rating: {movie.vote_average.toFixed(2)}</p>
                            <StarRatingClient rating={movie.vote_average/2}/>
                        </div>

                    <div className={styles.descriptions}>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MovieInfo;
