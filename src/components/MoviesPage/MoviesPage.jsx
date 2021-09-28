import React from 'react';
// import {  } from '../HomePage.styled.jsx';
import { BrowserRouter as Router,Route,Link,Switch, useRouteMatch} from "react-router-dom";
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage'


export default function MoviesPage({ films }) {
    return (<>
        <Router>
        <ul> {films ? films.results.map((film) =>
                <li key={film.id}>
                <Link to={`/movieDetailsPage/${film.id}`} >{film.original_title}</Link>
                <Switch>
                    <Route path={`/movieDetailsPage/${film.id}`}><MovieDetailsPage /></Route>
                </Switch>    
            </li>
                )
            : <li>Any film was found yet</li>}
            </ul>    
        
        
        </Router>
   </>)
}
//  <img alt={film.original_title} src={'https://image.tmdb.org/t/p/w300' + film.backdrop_path}></img>


