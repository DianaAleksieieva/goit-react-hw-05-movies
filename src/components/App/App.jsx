// import { } from './App.styled.jsx';
import filmAPI from '../../services/FilmApi'
import filmByQueryAPI from '../../services/FilmQuery'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
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
    <ul className="App">
      <li >
        <Link to="/trending">Home Page</Link>
      </li>
             <li>
        <Link to="/movies">Movies</Link>
      </li>
      </ul>
      <ul className="App"></ul>
     <Switch>
       <Route path="/trending" ><HomePage films={films}/></Route>
      
          <Route exact path="/movies" >
            <Search filmName={filmName} onSubmit={findFilmByName}></Search>
            <MoviesPage films={films} />
          </Route>

          <Route path="/movies/:moviesId"><MovieDetailsPage films={films}/></Route>
      </Switch>
      </Router>
  </>
  ); 
}
