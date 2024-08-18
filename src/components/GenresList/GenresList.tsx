"use client";

import React, { useEffect, useState } from 'react';
import IGenre from "@/models/IGenre";
import { genresService } from "@/services/genre.api.service";
import GenreListCard from "@/components/GenreListCard/GenreListCard";
import styles from './GenresList.module.css';
import ResetFilters from "@/components/ResetFilters/ResetFilters";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await genresService.getAllGenres();
                setGenres(response.genres);
            } catch (err) {
                setError("Unable to load genres, try refreshing the page");
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    if (loading) {
        return <div className={styles.pendingStyle}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.pendingStyle}>{error}</div>;
    }

    return (
        <div className={styles.divBoxGenre}>
            <div className={styles.boxGenre}>
                {genres.map((genre) => (
                    <GenreListCard
                        key={genre.id}
                        genre={genre}
                    />
                ))}
                <ResetFilters/>
            </div>
        </div>
    );
};

export default GenresList;
