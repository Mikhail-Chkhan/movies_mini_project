"use client"
import { moviesService } from "@/services/movie.api.service";
import IMovie from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './MoviesList.module.css';
import { FC, useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/redux/store";
import {resetFilters} from "@/redux/slices/filterSlice";

const MoviesList: FC = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filters.filters);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            dispatch(resetFilters())
        }

        const getMovies = async () => {
            const response = await moviesService.getMovies(filters);
            setMovies(response.results);
            console.log(filters);

        };

        getMovies();
    }, [filters]);

    return (
        <div className={styles.boxAllMovies}>
            {movies.map((movie) => (
                <MoviesListCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MoviesList;
