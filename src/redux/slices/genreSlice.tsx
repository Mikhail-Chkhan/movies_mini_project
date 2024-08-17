import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IGenre from "@/models/IGenre";

interface GenreState {
    genres: IGenre[];
}

const initialState: GenreState = {
    genres: [],
};

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload;
        },
        resetGenres: (state) => {
            state.genres = [];
        },
        updateGenre: (state, action: PayloadAction<IGenre>) => {
            const genreIndex = state.genres.findIndex(genre => genre.id === action.payload.id);
            if (genreIndex !== -1) {
                state.genres[genreIndex] = { ...state.genres[genreIndex], ...action.payload };
            }
        },
    },
});

export const { setGenres, updateGenre, resetGenres } = genreSlice.actions;

export default genreSlice.reducer;
