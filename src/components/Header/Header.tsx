import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.menuBox}>
           <div> <Link href={'/'}>Home</Link> </div>
           <div> <Link href={'/movies'}>Movies</Link> </div>
           <div> <Link href={'/genres'}>Genres</Link> </div>

        </div>
    );
};

export default Header;