import React from 'react';
import MoviesList from "@/components/MoviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <MoviesList type={'search'}/>
        </div>
    );
};

export default MoviesPage;