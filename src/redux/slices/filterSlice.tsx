import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IFilterMovies from '@/models/IFilterMovies';

interface FilterState {
    filters: IFilterMovies;
}

const initialState: FilterState = {
    filters: {} as IFilterMovies,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<IFilterMovies>) => {
            state.filters = action.payload;
        },
        resetFilters: (state) => {
            state.filters = {};
        },
        updateFilter: (state, action: PayloadAction<Partial<IFilterMovies>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        updateMultiFilter:  (state, action: PayloadAction<Partial<IFilterMovies>>) => {
            const { with_genres } = action.payload;

            if (with_genres !== undefined) {
                let genresArray = state.filters.with_genres
                    ? state.filters.with_genres.split(',').filter(Boolean)
                    : [];
                if (genresArray.includes(with_genres)) {
                    genresArray = genresArray.filter(genre => genre !== with_genres);
                } else {
                    genresArray.push(with_genres);
                }

                state.filters.with_genres = genresArray.join(',');
            } else {
                state.filters = { ...state.filters, ...action.payload };
            }
        },
    },
});

export const { setFilters, updateFilter, updateMultiFilter,resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
