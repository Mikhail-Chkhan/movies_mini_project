"use client";
import React, {FC} from 'react';
import styles from './ResetFilters.module.css'
import {useDispatch} from "react-redux";
import {resetFilters} from "@/redux/slices/filterSlice";
import {resetSearchParams} from "@/redux/slices/searchParamsSlice";

interface ResetFiltersProps {
    onReset?: () => void;
}

const ResetFilters: FC<ResetFiltersProps> = ({ onReset }) => {
    const dispatch = useDispatch();
    let resetFilter = () => {
        dispatch(resetFilters())
        dispatch(resetSearchParams())

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