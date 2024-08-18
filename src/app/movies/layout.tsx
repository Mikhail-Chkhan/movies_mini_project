import React from 'react';
import {Metadata} from "next";
import styles from './page.module.css'

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