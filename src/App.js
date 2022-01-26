import { Fragment, useEffect, useState } from 'react';
import MainNavigation from './components/Layout/MainNavigation';
import MoviesList from './components/MoviesList';
import configData from './config.json';
import classes from './App.module.css';

function App() {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [bestMoviesData, setbestMoviesData] = useState([]);

  const fetchPopularMovies = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&language=en-US`
    );
    const data = await results.json();
    const dataTopTen = data.results.slice(0, 10);
    setPopularMoviesData(dataTopTen);
  };

  const fetchBestMovies = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&language=en-US&sort_by=vote_average.desc&vote_count.gte=10000`
    );
    const data = await results.json();
    const dataTopTen = data.results.slice(0, 10);
    setbestMoviesData(dataTopTen);
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchBestMovies();
  }, []);

  return (
    <Fragment>
      <header>
        <MainNavigation />
      </header>
      <div className={classes.headings}>
        <h1>Most Popular Movies</h1>
      </div>
      <MoviesList moviesData={popularMoviesData} />
      <div className={classes.headings}>
        <h1>Best Movies by Rating</h1>
      </div>
      <MoviesList moviesData={bestMoviesData} />
    </Fragment>
  );
}

export default App;
