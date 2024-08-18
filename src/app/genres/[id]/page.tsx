import React from 'react';
import MoviesListClient from "@/components/MoviesList/MoviesListClient";

type Params = {
    params: { id: string }
};

const PageForSingleGenre: React.FC<Params> = ({ params }) => {

    return (
        <div>
            <MoviesListClient genreId={params.id}  type={"genre"}/>
        </div>
    );
};

export default PageForSingleGenre;
