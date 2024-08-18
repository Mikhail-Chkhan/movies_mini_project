import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    const defaultUsername = "astedor";

    return (
        <div className={styles.userBox}>
            <FontAwesomeIcon icon={faUser}
            className={styles.iconBox}/>
            <p>{defaultUsername}</p>
        </div>
    );
};

export default UserInfo;
