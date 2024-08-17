import React from 'react';
import MoviesList from "@/components/MoviesList/MoviesList";
import SearchComponent from "@/components/SearchComponents/SearchComponent";
import styles from "@/app/movies/page.module.css";

const MoviesPage = () => {
    return (
        <div>
            <div className={styles.divSearch}>
                <SearchComponent/>
            </div>
            <div >
                <MoviesList type={'search'}/>
            </div>
        </div>
    );
};

export default MoviesPage;