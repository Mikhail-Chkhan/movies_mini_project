import React from 'react';
import MoviesListSingleGenre from "@/components/MoviesListSingleGenre/MoviesListSingleGenre";

type Params = {
    params: { id: string }
};

const PageForSingleGenre: React.FC<Params> = ({ params }) => {

    return (
        <div>
            <MoviesListSingleGenre genreId={params.id} />
        </div>
    );
};

export default PageForSingleGenre;
