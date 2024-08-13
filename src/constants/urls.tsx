export const BaseUrl = 'https://api.themoviedb.org';

export const urls = {
    movies: {
        base: BaseUrl + '/3/discover/movie',
        byId: (id: string): string => BaseUrl + "/3/movie/" + id,
    },
    // posts: {
    //     base: '/posts',
    //     byId: (id: number): string => urls.posts.base + "/" + id,
    //     ByUserId: (userID:number):string => urls.posts.base + "?userId=" + userID
    // },
    // comments: {
    //     base: '/comments',
    //     byId: (id:number):string => urls.posts.base + '/' + id + '/comments' //'/posts/'+postId+'/comments'
    // }

}