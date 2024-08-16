import React from 'react';
import {Metadata} from "next";
import {moviesService} from "@/services/movie.api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let movie = await moviesService.getMovieById(params.id);
    return {title: movie.title}
}
type Props = { children: React.ReactNode }
const MovieIdLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieIdLayout;