import React from 'react';
import GenresList from "@/components/GenresList/GenresList";
import MoviesList from "@/components/MoviesList/MoviesList";

const GenresPage = () => {
    return (
        <div>
            <MoviesList type={'genre'}/>
        </div>
    );
};

export default GenresPage;