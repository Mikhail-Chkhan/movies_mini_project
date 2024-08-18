import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    dark: boolean;
}

const initialState: ThemeState = {
    dark: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        update: (state) => {
            state.dark = !state.dark;
        },
        set: (state, action: PayloadAction<ThemeState>) => {
            state.dark = action.payload.dark;
        },
    },
});

export const { update, set } = themeSlice.actions;

export default themeSlice.reducer;
