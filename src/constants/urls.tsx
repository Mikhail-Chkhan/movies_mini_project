export const BaseUrl = 'https://api.themoviedb.org';

export const urls = {
    movies: {
        base: BaseUrl + '/3/discover/movie',
        byId: (id: string): string => BaseUrl + "/3/movie/" + id,
        search: BaseUrl + '/3/search/movie'
    },
    genres: {
        base: BaseUrl + '/3/genre/movie/list'
    },
    images: {
        base: 'https://image.tmdb.org/t/p/w500/',
        errorImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fpremium-vector%2Fhand-drawn-cinema-clapperboard-doodle-movie-element-sketch-style_29578004.htm&psig=AOvVaw272Vft1EUPEhXQSwsovlWm&ust=1723924362271000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi1ufKk-ocDFQAAAAAdAAAAABAc'
    },
    languages: {
        base: BaseUrl + '/3/configuration/languages'
    }

}
