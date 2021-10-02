import React from 'react';
import { BrowserRouter as Router,Link,useRouteMatch, useLocation} from "react-router-dom";
import { StyledLink, FilmInfo, Img } from './MoviesPage.styled.jsx';

const imgPath = 'https://image.tmdb.org/t/p/w300'
const defaultIMG = 'http://areaedu.com/areaedu/wp-content/uploads/2016/02/default-placeholder-180x180.png'

export default function MoviesPage({ films }) {
    const { url } = useRouteMatch();
    const location = useLocation();

    return (
        <>    
        <FilmInfo> {films ? films.results.map((film) =>
            <p key={film.id}>
                <StyledLink to={{ pathname: `${url}/${film.id}`, state: location.pathname }} >
                {film.backdrop_path ?
                    <Img alt={film.original_title} src={imgPath + film.backdrop_path}></Img>
                    : <Img width='300' height='170' src={defaultIMG} ></Img>}
                {film.original_title}
                </StyledLink>
            </p>
                )
            : <p>Any film was found yet</p>}
        </FilmInfo>    
        </>
   )
}

