// import {  } from '../HomePage.styled.jsx';
import { BrowserRouter as Router, Route,Link,Switch, useRouteMatch} from "react-router-dom";
import Cast  from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import { useParams } from 'react-router-dom';
import React from 'react';

export default function MovieDetailsPage() {
    const match = useRouteMatch()
    const { moviesId } = useParams();
    return (
        <>
            <Router>
                <h1>Film {moviesId}</h1>
            <ul>
       <li><Link to={`${match.url}/reviews`}>Reviews</Link></li>
           <li>     <Link to={`${match.url}/cast`}>Cast</Link></li>
                </ul>
  <Switch>
            <Route path={`${match.url}/cast`}><Cast id={moviesId}></Cast> </Route>
            <Route path={`${match.url}/reviews`}> <Reviews id={moviesId}></Reviews> </Route>
                </Switch>
                </Router>
        </>
          )
}

 