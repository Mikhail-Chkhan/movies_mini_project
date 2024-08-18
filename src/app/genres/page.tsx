import React from 'react';
import MoviesListClient from "@/components/MoviesList/MoviesListClient";

const GenresPage = () => {
    return (
        <div>

            <MoviesListClient type={'genre'}/>
        </div>
    );
};

export default GenresPage;