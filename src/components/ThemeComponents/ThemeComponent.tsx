"use client";

import React from 'react';
import styles from './ThemeComponent.module.css';
import {useDispatch, useSelector} from "react-redux";
import {update} from "@/redux/slices/themeSlice";
import {RootState} from "@/redux/store";


const ThemeComponent = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.theme.dark);

    const handleToggle = () => {
        dispatch(update());
    };

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={darkMode} onChange={handleToggle} />
            <span className={styles.slider}></span>
            <span className={darkMode? styles.labelTextDark:styles.labelText}>{darkMode? "Dark":"White"}</span>
        </label>
    );
};

export default ThemeComponent;
