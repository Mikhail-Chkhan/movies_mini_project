"use client"

import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserInfo from "@/components/UserInfo/UserInfo";
import ThemeComponent from "@/components/ThemeComponents/ThemeComponent";
import {getTheme} from "@/helpers/helperSetTheme";

const Header = () => {
    let dark = getTheme()

    return (
        <div className={dark? styles.menuBoxDark: styles.menuBox}>
            <div className={styles.navLink}>
                <Link href={'/movies'}>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faSearch}/>Movie search
                </Link>

                <Link href={'/genres'}>Movies and genres</Link>
            </div>
            <div>
                <ThemeComponent/>
            </div>
            <div  className={styles.userLink}>
                <UserInfo/>
            </div>


        </div>
    );
};

export default Header;