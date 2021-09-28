import React from 'react';
// import {  } from '../HomePage.styled.jsx';

export default function HomePage({ films }) {
   
    return (
         
        <ul>
            {films ? 
                    films.results.map((film) =>
                        <li key={film.id}>
                            {film.original_title}
                        </li>
                    )
                : <li></li>}
        </ul>)
}
            
