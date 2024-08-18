"use client";
import {moviesService} from "@/services/movie.api.service";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './MoviesList.module.css';
import React, {FC, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {resetFilters} from "@/redux/slices/filterSlice";
import {MoviesResponse} from "@/models/MoviesResponse";
import PaginationComponent from "@/components/PaginationComponents/PaginationComponent";
import {resetSearchParams} from "@/redux/slices/searchParamsSlice";

interface MoviesListProps {
    type: string;
}

const MoviesList: FC<MoviesListProps> = ({type}) => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters.filters);
    const searchParams = useSelector((state: RootState) => state.searchParams.searchParams);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [movies, setMovies] = useState<MoviesResponse>({page: 0, results: [], total_pages: 0, total_results: 0});
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (!searchParams.query) type = 'genre'
        if (isInitialRender.current) {
            isInitialRender.current = false;
            dispatch(resetFilters());
            dispatch(resetSearchParams())
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
                // console.log("Фильтра",filters);
                // console.log("Кверя",searchParams)

            } catch (err) {
                setError("Unable to load movies, try refreshing the page");
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [filters, searchParams, type]); // Добавил зависимости

    if (loading) {
        return <div className={styles.pendingStyle}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.pendingStyle}>{error}</div>;
    }

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

export default MoviesList;
