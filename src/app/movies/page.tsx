import React from 'react';

import SearchComponent from "@/components/SearchComponents/SearchComponent";
import styles from "@/app/movies/page.module.css";
import MoviesListClient from "@/components/MoviesList/MoviesListClient";

const MoviesPage = () => {
    return (
        <div>
            <div className={styles.divSearch}>
                <SearchComponent/>
            </div>
            <div className={styles.divContent}>
                <MoviesListClient type={'search'}/>
            </div>
        </div>
    );
};

export default MoviesPage;