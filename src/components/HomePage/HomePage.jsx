import React from 'react';
// import {  } from '../HomePage.styled.jsx';
import { BrowserRouter as Router,Link } from "react-router-dom";

export default function HomePage({ films }) {
    return (
         
        <ul>
            {films ? 
                    films.results.map((film) =>
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
                        </li>
                    )
                : <li></li>}
            </ul>
           
            )
}
