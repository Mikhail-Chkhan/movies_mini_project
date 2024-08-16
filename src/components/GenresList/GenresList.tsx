import IGenre from "@/models/IGenre";
import {genresService} from "@/services/genre.api.servise";
import GenreListCard from "@/components/GenreListCard/GenreListCard";
import styles from './GenresList.module.css'
import ResetFilters from "@/components/ResetFilters/ResetFilters";


const GenresList = async () => {

    let genres: IGenre[] = (await genresService.getAllGenres()).genres;

    return (
        <div>
            <div className={styles.boxGenre}>

                {genres.map((genre) => (
                    <GenreListCard
                        key={genre.id}
                        genre={genre}/>
                ))}
                <ResetFilters/>
            </div>
        </div>
    )
};

export default GenresList;