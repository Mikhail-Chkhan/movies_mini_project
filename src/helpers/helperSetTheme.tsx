"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const getTheme = () => {
    const dark: boolean = useSelector((state: RootState) => state.theme.dark);
    return dark;
};
