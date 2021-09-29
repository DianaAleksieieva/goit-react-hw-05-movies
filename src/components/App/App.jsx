import {Container,Header,HeaderLink,PageHeader,StyledLink} from './App.styled.jsx';
import filmAPI from '../../services/FilmApi'
import filmByQueryAPI from '../../services/FilmQuery'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";
import HomePage  from '../HomePage/HomePage'
import MoviesPage from '../MoviesPage/MoviesPage'
import Search from '../Search/Search'
import MovieDetailsPage from '../MoviesPage/MovieDetailsPage/MovieDetailsPage'

export default function App() {
  const [filmName, setFilmName] = useState('');
  const [films, setFilms] = useState('');
  const [findedFilms, setFindedFilms] = useState('');
  
    useEffect(() => {
    filmAPI.fetchFilms()
      .then(films => setFilms(films))
      .catch(error => { console.log('error') })
    }, [])
  
  useEffect(() => {
    filmByQueryAPI.fetchFilmsByQuery(filmName)
      .then(findedFilms => setFindedFilms(findedFilms))
      .catch(error => { console.log('emptyQuery') })
    }, [filmName])
  
  
  const findFilmByName = filmName => {
    setFilmName(filmName)
  }


  
  return (
    <>
      <Router>
        
        <Header>
        <StyledLink   to="/trending">Home Page</StyledLink >
        <StyledLink  to="/movies">Movies</StyledLink >
        </Header>
        <Container>
     <Switch>
       <Route path="/trending" ><PageHeader>Trending</PageHeader><HomePage films={films}/></Route>
          <Route exact path="/movies" ><PageHeader>Search Movie</PageHeader>
            <Search filmName={filmName} onSubmit={findFilmByName}></Search>
            <MoviesPage films={findedFilms} />
          </Route>
    
          <Route path="/movies/:moviesId"><MovieDetailsPage films={films}/></Route>
      </Switch>
      </Container>
      </Router>
  </>
  ); 
}
