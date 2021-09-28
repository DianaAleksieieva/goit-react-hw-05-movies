import React from 'react';
// import {  } from '../HomePage.styled.jsx';
// import Cast  from '../Cast/Cast'
// import Reviews from '../Reviews/Reviews'
import { BrowserRouter as Router, Route,Link,Switch, useRouteMatch } from "react-router-dom";
import Cast  from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

export default function MovieDetailsPage(films) {
    const match = useRouteMatch()
    return (
        <>
            <Router>
            <h1>Film</h1>
            <ul>
       <li><Link to={`${match.path}/:reviews`}>Reviews</Link></li>
           <li>     <Link to={`${match.path}/:cast`}>Cast</Link></li>
                </ul>
  <Switch>
            <Route path="movieDetailsPage/:cast" component={Cast} />
            <Route path="movieDetailsPage/:reviews" component={Reviews} />
                </Switch>
                </Router>
        </>
          )
}

 