function fetchFilmsByQuery(query) {
    const key = '8148f961f3aed906702d0602e8247e76'
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.refect(new Error('EROR'))
    })
}
const filmByQueryAPI = {
    fetchFilmsByQuery
}
export default filmByQueryAPI


