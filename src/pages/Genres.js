import { useEffect, useState } from 'react';
import configData from '../config.json';
import classes from './Genres.module.css';
import GenreItem from '../components/GenreItem';

const Genres = () => {
  const [genresData, setGenresData] = useState([]);

  const fetchGenresIds = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${configData.API_KEY}`
    );
    const data = await results.json();
    const genresData = data.genres;
    setGenresData(genresData);
    console.log(genresData);
  };

  useEffect(() => {
    fetchGenresIds();
  }, []);

  return (
    <>
      <div className={classes.outer}>
        <div className={classes.title}>
          <h1>Top 10 Movies by Genres</h1>
        </div>
      </div>
      <div className={classes.genres}>
        {genresData.map((genre) => {
          return <GenreItem id={genre.id} name={genre.name} />;
        })}
      </div>
    </>
  );
};

export default Genres;
