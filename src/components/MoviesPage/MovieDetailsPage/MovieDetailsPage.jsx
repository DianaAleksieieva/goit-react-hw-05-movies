import {MoreInfoNav,MoreInfoNavItem,PageHeader} from './MovieDetailsPage.styled.jsx';
import { BrowserRouter as Router, Route,Link,Switch, useRouteMatch} from "react-router-dom";
import Cast  from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import { useParams } from 'react-router-dom';
 import React, { useState, useEffect } from 'react';
import MovieDetailsAPI from '../../../services/MovieDetails'

export default function MovieDetailsPage() {
      const [details, setDetails] = useState('');
    const match = useRouteMatch()
    const { moviesId } = useParams();
      useEffect(() => {
       MovieDetailsAPI.fetchMovieDetails(moviesId)
          .then(details => setDetails(details))
          .catch(error => { console.log('Details ferch error') });
    }, [moviesId])
   
    return (
        <>
            <PageHeader>Film Details</PageHeader>
            <Router>
                {details ?
                    <> 
                 <img alt={details.original_title} src={'https://image.tmdb.org/t/p/w300' + details.backdrop_path}></img>
                <h2>{ details.original_title }</h2>
                        <ul>
                < li >User Score: {details.popularity}</li>
         < li >Countries: 
     {details.production_countries.map((countries) => <> {countries.iso_3166_1} </>)}
         </li > 
          
               <li>Genres: {details.genres.map((genres) =>
                genres.name + ' ')} </li>
                            
                </ul></>            
                    : <ul><li>No Film info</li></ul>}
    <MoreInfoNav>
        <MoreInfoNavItem to={`${match.url}/reviews`}>Reviews</MoreInfoNavItem>
        <MoreInfoNavItem to={`${match.url}/cast`}>Cast</MoreInfoNavItem>
    </MoreInfoNav>
  <Switch>
            <Route path={`${match.url}/cast`}><Cast id={moviesId}></Cast> </Route>
            <Route path={`${match.url}/reviews`}> <Reviews id={moviesId}></Reviews> </Route>
                </Switch>
                </Router>
        </>
          )
}



