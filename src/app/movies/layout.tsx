import React from 'react';
import {Metadata} from "next";
import GenresList from "@/components/GenresList/GenresList";
import SearchComponent from "@/components/SearchComponents/SearchComponent";
import styles from '@/app/page.module.css'

export const metadata: Metadata = {
    title: 'Movies'
}

type Props = { children: React.ReactNode }

const MoviesLayout = ({children}: Props) => {
    return (
        <div  className={styles.divContent}>
            {children}
        </div>
    );
};

export default MoviesLayout;