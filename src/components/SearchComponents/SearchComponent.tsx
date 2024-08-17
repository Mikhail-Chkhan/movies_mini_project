"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './SearchComponent.module.css';
import ISearchModel from "@/models/ISearchModel";
import {LanguagesService} from "@/services/language.api.service";
import ILanguage from "@/models/ILanguage";
import ResetFilters from "@/components/ResetFilters/ResetFilters";
import {useDispatch} from "react-redux";
import {updateSearchParams} from "@/redux/slices/searchParamsSlice";

const SearchComponent: FC = () => {
    const dispatch = useDispatch();
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [searchModel, setSearchModel] = useState<ISearchModel>({
        query: '',
        language: '',
        year: '',
        page: '1'
    });

    useEffect(() => {
        // Fetch languages
        const fetchLanguages = async () => {
            const response = await LanguagesService.getAllLanguages();
            setLanguages(response);
        };

        const generateYears = () => {
            const yearArray = [];
            for (let i = 1900; i <= 2024; i++) {
                yearArray.unshift(i.toString());  // Добавляет год в начало массива
            }
            setYears(yearArray);
        };

        fetchLanguages();
        generateYears();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setSearchModel(prevState => {
            const updatedModel = {
                ...prevState,
                [name]: value
            };
            console.log(updatedModel); // Вывод в консоль обновленного объекта searchModel
            dispatch(updateSearchParams(updatedModel)); // Правильный вызов dispatch
            return updatedModel;
        });
    };

    return (
        <div className={styles.divBorder}>
            <input
                className={styles.inputSearch}
                placeholder="Enter the name of the movie, for example: John Wick"
                name="query"
                value={searchModel.query}
                onChange={handleInputChange}
            />
            <select
                name="language"
                value={searchModel.language}
                onChange={handleInputChange}
                className={styles.dropdown}
            >
                <option value="">Select Language</option>
                {languages.map((language, index) => (
                    <option key={index} value={language.iso_639_1}>{language.english_name}</option>
                ))}
            </select>
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
            <ResetFilters/>
        </div>
    );
};

export default SearchComponent;
