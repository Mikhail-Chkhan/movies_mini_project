"use client";

import React, {FC, useEffect, useState} from 'react';
import styles from "./PaginationComponent.module.css";
import {PaginatedPageModel} from "@/models/PaginatedPageModel";
import {useDispatch} from "react-redux";
import {updateFilter} from "@/redux/slices/filterSlice";
import {getTheme} from "@/helpers/helperSetTheme";

const PaginationComponent: FC<PaginatedPageModel> = ({ page, total_pages }) => {
    const [arrPaginator, setArrPaginator] = useState<string[]>([]);
    const dispatch = useDispatch();
    let dark = getTheme()

    useEffect(() => {
        createArrPages(page, total_pages);
    }, [page, total_pages]);

    const changePage = (targetPage: number) => {
        // --------------------Косытыль-----------------//
        if (targetPage>500){targetPage=500}
        // --------------------Костыль------------------//
        dispatch(updateFilter({ page: targetPage.toString() }));
    };

    const createArrPages = (currentPage: number, totalPage: number) => {
        let pages: string[] = [];

        if (totalPage < 8) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i.toString());
            }
        } else if (currentPage <= 3 && totalPage >= 8) {
            for (let i = 1; i <= 5; i++) {
                pages.push(i.toString());
            }
            pages.push("...");
            pages.push(totalPage.toString());
        } else if (currentPage > totalPage - 3 && totalPage >= 8) {
            for (let i = totalPage - 4; i <= totalPage; i++) {
                pages.push(i.toString());
            }
            pages.unshift("...");
            pages.unshift("1");
        } else if (currentPage > 3 && currentPage <= totalPage - 3 && totalPage >= 8) {
            pages.push("1");
            pages.push("...");
            pages.push((currentPage - 1).toString());
            pages.push(currentPage.toString());
            pages.push((currentPage + 1).toString());
            pages.push("...");
            pages.push(totalPage.toString());
        }

        setArrPaginator(pages);
    };

    return (
        <div className={styles.paginatorBox}>
            <button
                className={dark? styles.allPageDark:styles.allPage}
                disabled={page <= 1}
                onClick={() => changePage(page - 1)}
            >
                &lt;
            </button>

            {arrPaginator.map((pageNumber, index) => (
                <button
                    key={index}
                    className={
                        page.toString() === pageNumber
                            ? dark
                                ? styles.currentPageDark
                                : styles.currentPage
                            : dark
                                ? styles.allPageDark
                                : styles.allPage
                    }
                    onClick={() => pageNumber !== "..." && changePage(Number(pageNumber))}
                    disabled={pageNumber === '...'}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                className={dark? styles.allPageDark:styles.allPage}
                disabled={page >= total_pages}
                onClick={() => changePage(page + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default PaginationComponent;
