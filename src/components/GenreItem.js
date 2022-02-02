import classes from './GenreItem.module.css';
import configData from '../config.json';
import { useEffect, useState } from 'react';
import MoviesList from './MoviesList';

const GenreItem = (props) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const fetchGenreMovies = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&with_genres=${props.id}`
    );
    const data = await results.json();
    const dataTopTen = data.results.slice(0, 10);
    setGenreMovies(dataTopTen);
  };

  useEffect(() => {
    fetchGenreMovies();
  });

  return (
    <div className={classes.genre}>
      <div className={classes['genre-title']}>
        <h1>{props.name}</h1>
      </div>
      <MoviesList moviesData={genreMovies} />
    </div>
  );
};

export default GenreItem;
