// import React from 'react';
// import MoviesList from "@/components/MoviesList/MoviesList";
// import {refreshReducer} from "next/dist/client/components/router-reducer/reducers/refresh-reducer";
// import {ReadonlyReducerState, RefreshAction} from "next/dist/client/components/router-reducer/router-reducer-types";
//
// const MoviesPage = (state: ReadonlyReducerState, action: RefreshAction) => {
//     refreshReducer(state, action)
//     return (
//         <div>
//             <MoviesList />
//         </div>
//     );
// };
//
// export default MoviesPage;

import React from 'react';
import MoviesList from "@/components/MoviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <MoviesList />
        </div>
    );
};

export default MoviesPage;