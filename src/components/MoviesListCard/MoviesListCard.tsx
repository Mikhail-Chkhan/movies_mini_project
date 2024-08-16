import React, { FC } from 'react';
import IMovie from "@/models/IMovie";
import Link from "next/link";
import { urls } from "@/constants/urls";
import styles from './MoviesListCard.module.css'

interface MovieProps {
    movie: IMovie;
}

const MoviesListCard: FC<MovieProps> = ({ movie }) => {
    return (
        <Link href={`/movies/${movie.id}`}>
            <img className={styles.borderPoster} src={`${urls.images.base}${movie.backdrop_path}`} alt={movie.title} />
        </Link>
    );
};

export default MoviesListCard;
