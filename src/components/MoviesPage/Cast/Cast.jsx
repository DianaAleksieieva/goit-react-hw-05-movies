import React, { useState, useEffect } from 'react';
import movieCreditsAPI from '../../../services/MovieCredits'

export default function Cast({id}) {
    const [cast, setCast] = useState('');
  
    useEffect(() => {
       movieCreditsAPI.fetchMovieCredits(id)
          .then(cast => setCast(cast))
          .catch(error => { console.log('Cast ferch error') });
    }, [id])
   
    return (
        <>
            <ul> {cast ? cast.cast.map((cast) =>
                <li key={cast.id}>{cast.name}</li>)
                : <li>No Cast info</li>}
             </ul>    
       </>)
}
            
