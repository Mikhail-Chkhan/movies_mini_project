import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import genreReducer from './slices/genreSlice';
import searchParamsReducer from './slices/searchParamsSlice';


export const store = configureStore({
    reducer: {
        filters: filterReducer,
        genres: genreReducer,
        searchParams: searchParamsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
