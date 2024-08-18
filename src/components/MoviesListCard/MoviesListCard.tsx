import React, { FC } from 'react';
import IMovie from "@/models/IMovie";
import Link from "next/link";
import { urls } from "@/constants/urls";
import styles from './MoviesListCard.module.css'
import StarRatingClient from "@/components/StarRatingClient/StarRatingClient";
import {getTheme} from "@/helpers/helperSetTheme";

interface MovieProps {
    movie: IMovie;
}

const placeholderImage = 'ErrorImages.jpg';

const MoviesListCard: FC<MovieProps> = ({ movie }) => {
    let dark = getTheme()
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = placeholderImage;
    };

    return (
        <Link href={`/movies/${movie.id}`} className={dark? styles.linkDark:styles.link}>
            <div className={styles.imgDiv}>
                <img
                    className={styles.borderPoster}
                    src={`${urls.images.base}${movie.poster_path}`}
                    alt={movie.title}
                    onError={handleImageError}
                />
            </div>
            <div className={dark? styles.titleBoxDark:styles.titleBox}>
                <StarRatingClient rating={movie.vote_average/2}/>

                <p>{movie.title}</p>
            </div>
        </Link>
    );
};

export default MoviesListCard;
