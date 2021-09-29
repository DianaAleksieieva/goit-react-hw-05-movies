import React from 'react';
import { BrowserRouter as Router,Link,useRouteMatch } from "react-router-dom";
import {StyledLink,FilmInfo,Img} from './MoviesPage.styled.jsx';

export default function MoviesPage({ films }) {
    const { url } = useRouteMatch();
    
    return (
     <>
        <FilmInfo> {films ? films.results.map((film) =>
            <p key={film.id}>
                <StyledLink  to={`${url}/${film.id}`} filmName={film.original_title}>
                {film.backdrop_path ?
                    <Img alt={film.original_title} src={'https://image.tmdb.org/t/p/w300' + film.backdrop_path}></Img>
                    : <Img width='300' height='170' src='http://areaedu.com/areaedu/wp-content/uploads/2016/02/default-placeholder-180x180.png' ></Img>}
                {film.original_title}
                </StyledLink>
            </p>
                )
            : <p>Any film was found yet</p>}
            </FilmInfo>    
    </>
   )
}

