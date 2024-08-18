import React, { FC } from "react";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponents/PaginationComponent";
import { MoviesResponse } from "@/models/MoviesResponse";
import styles from './MoviesList.module.css';

interface MoviesListServerProps {
    movies: MoviesResponse;
}

const MoviesListServer: FC<MoviesListServerProps> = ({ movies }) => {
    return (
        <div>
            <div className={styles.boxAllMovies}>
                {movies.results.map((movie) => (
                    <MoviesListCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
            <div className={styles.paginatorBox}>
                <PaginationComponent
                    page={movies.page}
                    total_pages={movies.total_pages}
                />
            </div>
        </div>
    );
};

export default MoviesListServer;
