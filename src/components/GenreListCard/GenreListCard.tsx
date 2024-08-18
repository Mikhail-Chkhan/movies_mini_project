"use client";

import React, { FC } from 'react';
import IGenre from "@/models/IGenre";
import styles from './GenreListCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateMultiFilter } from "@/redux/slices/filterSlice";

interface GenreProps {
    genre: IGenre;
}

const GenresListCard: FC<GenreProps> = ({ genre }) => {
    const dispatch = useDispatch();
    const with_genres = useSelector((state: RootState) => state.filters.filters.with_genres);
    const dark = useSelector((state: RootState) => state.theme.dark);

    const genreIds = with_genres ? with_genres.split(',').map(Number) : [];
    const isActive = genreIds.includes(genre.id);

    const activeFilter = () => {
        dispatch(updateMultiFilter({ with_genres: genre.id.toString() }));
    };

    return (
        <div
            className={
                isActive
                    ? dark
                        ? styles.genreCardActiveDark
                        : styles.genreCardActive
                    : dark
                        ? styles.genreCardDark
                        : styles.genreCard
            }
            onClick={activeFilter}
        >
            <p>{genre.name}</p>
        </div>
    );
};

export default GenresListCard;
