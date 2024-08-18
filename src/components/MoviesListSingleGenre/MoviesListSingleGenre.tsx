"use client";
import React, {FC, useEffect, useState} from 'react';
import {MoviesResponse} from "@/models/MoviesResponse";
import {moviesService} from "@/services/movie.api.service";
import styles from "@/components/MoviesList/MoviesList.module.css";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {updateFilter} from "@/redux/slices/filterSlice";
import PaginationComponent from "@/components/PaginationComponents/PaginationComponent";

interface GenreIdProps {
    genreId: string;
}

const MoviesListSingleGenre: FC<GenreIdProps> = ({ genreId }) => {
    const [movies, setMovies] = useState<MoviesResponse>({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    });

    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters.filters);

    useEffect(() => {
        dispatch(updateFilter({ with_genres: genreId }));
    }, [dispatch, genreId]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await moviesService.getMovies(filters);
                setMovies(response);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, [filters]);

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

export default MoviesListSingleGenre;
