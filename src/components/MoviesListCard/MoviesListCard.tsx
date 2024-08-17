import React, { FC } from 'react';
import IMovie from "@/models/IMovie";
import Link from "next/link";
import { urls } from "@/constants/urls";
import styles from './MoviesListCard.module.css'

interface MovieProps {
    movie: IMovie;
}

const placeholderImage = 'ErrorImages.jpg';

const MoviesListCard: FC<MovieProps> = ({ movie }) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = placeholderImage;
    };

    return (
        <Link href={`/movies/${movie.id}`} className={styles.link}>
            <img
                className={styles.borderPoster}
                src={`${urls.images.base}${movie.backdrop_path}`}
                alt={movie.title}
                onError={handleImageError}
            />
            <div className={styles.titleBox}>
                <p>{movie.title}</p>
            </div>
        </Link>
    );
};

export default MoviesListCard;
