import React, { useState, useEffect } from 'react';
import movieReviewsAPI from '../../../services/MovieReviews'

export default function Reviews({id}) {
     const [review, setReview] = useState('');
  
    useEffect(() => {
       movieReviewsAPI.fetchMovieReviews(id)
          .then(review => setReview(review))
          .catch(error => { console.log('Cast ferch error') });
    }, [id])
  
    return (<>
  
        <ul> {review ? review.results.map((review) =>
            <li key={review.id}>
                <p>{review.content}</p>
                <i>{review.author_details.username}</i>
            </li>
                )
            : <li>No Review info</li>}
            </ul>    
    {review && review.results.length===0&& <p>No Review info</p>}
   </>)
}
            
