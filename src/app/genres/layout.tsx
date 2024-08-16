import React from 'react';
import {Metadata} from "next";
import GenresList from "@/components/GenresList/GenresList";

export const metadata: Metadata = {
    title: 'GENRES'
}

type Props = { children: React.ReactNode }

const GenresLayout = ({children}: Props) => {
    return (
        <div>
            <GenresList/>
            {children}
        </div>
    );
};

export default GenresLayout;
