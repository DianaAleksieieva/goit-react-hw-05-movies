const baseURL = 'https://api.themoviedb.org/'    
const key = '8148f961f3aed906702d0602e8247e76'

function fetchMovieReviews(moviesId) {
    return fetch(`${baseURL}3/movie/${moviesId}/reviews?api_key=${key}&language=en-US`)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.refect(new Error('EROR'))
    })
}
const movieReviewsAPI = {
    fetchMovieReviews
}

export default movieReviewsAPI



