"use client";
import { moviesService } from "@/services/movie.api.service";
import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {resetFilters, updateFilter} from "@/redux/slices/filterSlice";
import { resetSearchParams } from "@/redux/slices/searchParamsSlice";
import { MoviesResponse } from "@/models/MoviesResponse";
import MoviesListServer from "./MoviesListServer";
import styles from './MoviesList.module.css';

interface MoviesListProps {
    type: string;
    genreId?: string;
}

const MoviesListClient: FC<MoviesListProps> = ({ type, genreId }) => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters.filters);
    const searchParams = useSelector((state: RootState) => state.searchParams.searchParams);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [movies, setMovies] = useState<MoviesResponse>({ page: 0, results: [], total_pages: 0, total_results: 0 });
    const isInitialRender = useRef(true);




    useEffect(() => {
        if (genreId) {
            dispatch(updateFilter({ with_genres: genreId }));
        }
    }, [genreId]);

    useEffect(() => {
        if (!searchParams.query) type = 'genre';
        if (isInitialRender.current) {
            isInitialRender.current = false;
            dispatch(resetFilters());
            dispatch(resetSearchParams());
        }

        const getMovies = async () => {
            try {
                let response;

                switch (type) {
                    case 'genre':
                        response = await moviesService.getMovies(filters);
                        break;
                    case 'search':
                        response = await moviesService.getMoviesAfterSearch(searchParams);
                        break;
                    default:
                        throw new Error("Invalid type");
                }

                setMovies(response);

            } catch (err) {
                setError("Unable to load movies, try refreshing the page");
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [filters, searchParams, type]);

    if (loading) {
        return <div className={styles.pendingStyle}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.pendingStyle}>{error}</div>;
    }

    return <MoviesListServer movies={movies} />;
};

export default MoviesListClient;
