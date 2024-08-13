import React, { FC } from 'react';
import IMovie from "@/models/IMovie";
import Link from "next/link";

interface MovieProps {
    movie: IMovie;
}

const MoviesListCard: FC<MovieProps> = ({ movie }) => {



        return (
        <Link href={`movies/${movie.id}`}>
            <p>{movie.id}</p>
            <p>{movie.title}</p>
            <br/>
        </Link>
    );
};

export default MoviesListCard;
