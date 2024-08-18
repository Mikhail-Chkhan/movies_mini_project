import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import themeReducer from './slices/themeSlice';
import searchParamsReducer from './slices/searchParamsSlice';

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        searchParams: searchParamsReducer,
        theme: themeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
