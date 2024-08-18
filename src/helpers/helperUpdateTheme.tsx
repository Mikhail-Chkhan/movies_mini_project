"use client";
import {useDispatch} from "react-redux";
import {update} from "@/redux/slices/themeSlice";

export const updateTheme = () => {
    const dispatch = useDispatch();
    dispatch(update());
};
