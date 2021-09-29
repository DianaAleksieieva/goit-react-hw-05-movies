import React from 'react';
import {FilmInfo,StyledLink} from './HomePage.styled.jsx';
import { BrowserRouter as Router,Link } from "react-router-dom";

export default function HomePage({ films }) {
return (
         
<FilmInfo>
    {films ? 
        films.results.map((film) =>
            <li key={film.id}>
                <StyledLink to={`/movies/${film.id}`}>{film.original_title}</StyledLink>
                </li>)
        : <li></li>}
 </FilmInfo>
    )
}
