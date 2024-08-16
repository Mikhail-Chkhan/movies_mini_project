import React from 'react';
import {Metadata} from "next";
import MoviesList from "@/components/MoviesList/MoviesList";
import GenresList from "@/components/GenresList/GenresList";

export const metadata: Metadata = {
    title: 'Movies'
}

type Props = { children: React.ReactNode }

const MoviesLayout = ({children}: Props) => {
    return (
        <div>
            <GenresList/>
            {children}
        </div>
    );
};

export default MoviesLayout;