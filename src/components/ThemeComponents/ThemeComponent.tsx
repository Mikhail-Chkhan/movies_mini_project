import React from 'react';
import styles from './ThemeComponent.module.css'

const ThemeComponent = () => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
            <span className={styles.labelText}>Theme</span>
        </label>
    );
};

export default ThemeComponent;
