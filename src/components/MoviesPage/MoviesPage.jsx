import React from 'react';
import { BrowserRouter as Router,Link,useRouteMatch } from "react-router-dom";


export default function MoviesPage({ films }) {
    const { url } = useRouteMatch();
    
    return (<>
     
        <ul> {films ? films.results.map((film) =>
            <li key={film.id}>
                <Link to={`${url}/${film.id}`} filmName={film.original_title}>{film.original_title}</Link>
            </li>
                )
            : <li>Any film was found yet</li>}
            </ul>    
    
   </>)
}
//  <img alt={film.original_title} src={'https://image.tmdb.org/t/p/w300' + film.backdrop_path}></img>
