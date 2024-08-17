import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ISearchModel from "@/models/ISearchModel";

interface ISearchModelState {
    searchParams: ISearchModel;
}

const initialState: ISearchModelState = {
    searchParams: {} as ISearchModel,
};

const searchParamsSlice = createSlice({
    name: 'searchParams',
    initialState,
    reducers: {
        setSearchParams: (state, action: PayloadAction<ISearchModel>) => {
            state.searchParams = action.payload;
        },
        resetSearchParams: (state) => {
            state.searchParams = {};
        },
        updateSearchParams: (state, action: PayloadAction<Partial<ISearchModel>>) => {
            state.searchParams = { ...state.searchParams, ...action.payload };
        },

    },
});

export const { setSearchParams, updateSearchParams,resetSearchParams } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
