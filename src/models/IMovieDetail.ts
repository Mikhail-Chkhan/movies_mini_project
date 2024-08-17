import IGenre from "@/models/IGenre";

export default interface IMovieDetail {
    id:number,
    title:string,
    overview:string,
    poster_path: string,
    vote_average:number,
    runtime:number
    genres:IGenre[]

}