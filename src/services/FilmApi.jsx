function fetchFilms() {
    const key = '8148f961f3aed906702d0602e8247e76'
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.refect(new Error('EROR'))
    })
}
const filmAPI = {
    fetchFilms
}
export default filmAPI