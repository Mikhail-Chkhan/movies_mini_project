import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './UserInfo.module.css'
import {getTheme} from "@/helpers/helperSetTheme";

const UserInfo = () => {
    const defaultUsername = "astedor";
    let dark = getTheme()

    return (
        <div className={dark? styles.userBoxDark:styles.userBox}>
            <FontAwesomeIcon icon={faUser}
            className={styles.iconBox}/>
            <p>{defaultUsername}</p>
        </div>
    );
};

export default UserInfo;
