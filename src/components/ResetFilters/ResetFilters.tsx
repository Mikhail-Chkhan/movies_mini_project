"use client";
import React from 'react';
import styles from './ResetFilters.module.css'
import {useDispatch} from "react-redux";
import {resetFilters, updateFilter} from "@/redux/slices/filterSlice";

const ResetFilters = () => {
    const dispatch = useDispatch();
    let resetFilter = () => {
        dispatch(resetFilters())

    }
    return (
        <div>
            <div
                className={styles.divReset}
                onClick={resetFilter}
            >
                <p>RESET</p>
            </div>
        </div>
    );
};

export default ResetFilters;