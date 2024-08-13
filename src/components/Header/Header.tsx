import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
           <div> <Link href={'/'}>Home</Link> </div>
           <div> <Link href={'/movies'}>Movies</Link> </div>
           <div> <Link href={'/genres'}>Genres</Link> </div>

        </header>
    );
};

export default Header;