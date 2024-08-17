"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './SearchComponent.module.css';
import ISearchModel from "@/models/ISearchModel";
import {useDispatch} from "react-redux";
import {updateSearchParams, resetSearchParams} from "@/redux/slices/searchParamsSlice";

const SearchComponent: FC = () => {

    const dispatch = useDispatch();
    const [years, setYears] = useState<string[]>([]);
    const [searchModel, setSearchModel] = useState<ISearchModel>({
        query: "",
        year: "",
        page: '1'
    });


    useEffect(() => {
        const generateYears = () => {
            const yearArray = [];
            for (let i = 1900; i <= 2024; i++) {
                yearArray.unshift(i.toString());
            }
            setYears(yearArray);
        };
        generateYears();


    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setSearchModel(prevState => {
            const updatedModel = {
                ...prevState,
                [name]: value
            };
            console.log(updatedModel);
            dispatch(updateSearchParams(updatedModel));
            return updatedModel;
        });
    };


    const handleResetFilters = () => {
        const initialModel = {
            query: "",
            year: "",
            page: '1'
        };
        setSearchModel(initialModel);
        dispatch(resetSearchParams())

    };

    return (
        <form className={styles.divBorder}>
            <input
                className={styles.inputSearch}
                placeholder="Enter the name of the movie, for example: John Wick"
                name="query"
                value={searchModel.query}
                onChange={handleInputChange}
                required
            />
            <select
                name="year"
                value={searchModel.year}
                onChange={handleInputChange}
                className={styles.dropdown}
            >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
            <button
                className={styles.buttonReset}
                onClick={handleResetFilters}>RESET</button>

        </form>
    );
};

export default SearchComponent;
