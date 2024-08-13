import React, { FC } from 'react';
import Link from "next/link";
import IMovieDetail from "@/models/IMovieDetail";

interface MovieInfoProps {
    movie: IMovieDetail;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {



    return (
        <div>
            <p>MovieInfoProps</p>
            <p>{movie.id}</p>
            <p>{movie.title}</p>
        </div>
    );
};

export default MovieInfo;
