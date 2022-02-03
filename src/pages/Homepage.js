import { Fragment, useEffect, useState, useCallback } from 'react';
import configData from '../config.json';
import classes from './Homepage.module.css';
import Slider from '../components/UI/Slider';
import MoviesList from '../components/MoviesList';

const Homepage = () => {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [bestMoviesData, setBestMoviesData] = useState([]);
  const [featuredMoviesData, setFeaturedMoviesData] = useState([]);
  const [isPopLoading, setIsPopLoading] = useState(false);
  const [errorPop, setErrorPop] = useState(null);
  const [isBestLoading, setIsBestLoading] = useState(false);
  const [errorBest, setErrorBest] = useState(null);
  const [isFtLoading, setIsFtLoading] = useState(false);
  const [errorFt, setErrorFt] = useState(null);

  let popContent,
    bestContent,
    ftContent = '';

  // A function that can be used for dynamically fetching movies. Future task.

  // const fetchMovies = async (query) => {
  //   const results = await fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${
  //       configData.API_KEY
  //     }&language=en-US${query ? query : ''}`
  //   );
  //   const data = await results.json();
  //   return data;
  // };

  const fetchFeaturedMovies = useCallback(async () => {
    setIsFtLoading(true);
    setErrorFt(null);
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${configData.API_KEY}`
      );
      if (!results.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await results.json();
      const dataTopTen = data.results.slice(0, 10);
      setFeaturedMoviesData(dataTopTen);
    } catch (error) {
      setErrorFt(error.message);
    }
    setIsFtLoading(false);
  }, []);

  const fetchPopularMovies = useCallback(async () => {
    setIsPopLoading(true);
    setErrorPop(null);
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&language=en-US`
      );
      if (!results.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await results.json();
      const dataTopTen = data.results.slice(0, 10);
      setPopularMoviesData(dataTopTen);
    } catch (error) {
      setErrorPop(error.message);
    }
    setIsPopLoading(false);
  }, []);

  const fetchBestMovies = useCallback(async () => {
    setIsBestLoading(true);
    setErrorBest(null);
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&language=en-US&sort_by=vote_average.desc&vote_count.gte=10000`
      );
      const data = await results.json();
      const dataTopTen = data.results.slice(0, 10);
      setBestMoviesData(dataTopTen);
    } catch (error) {
      setErrorBest(error.message);
    }
    setIsBestLoading(false);
  }, []);

  useEffect(() => {
    fetchPopularMovies();
    fetchBestMovies();
    fetchFeaturedMovies();
  }, [fetchPopularMovies, fetchBestMovies, fetchFeaturedMovies]);

  if (errorPop) popContent = <p>{errorPop}</p>;
  if (errorBest) bestContent = <p>{errorBest}</p>;
  if (errorFt) ftContent = <p>{errorFt}</p>;

  if (isPopLoading) popContent = <p>Loading...</p>;
  if (isBestLoading) bestContent = <p>Loading...</p>;
  if (isFtLoading) ftContent = <p>Loading...</p>;

  if (popularMoviesData.length > 0)
    popContent = <MoviesList moviesData={popularMoviesData} />;
  if (bestMoviesData.length > 0)
    bestContent = <MoviesList moviesData={bestMoviesData} />;
  if (featuredMoviesData.length > 0)
    ftContent = <Slider results={featuredMoviesData} />;

  return (
    <Fragment>
      <div className={classes.featured}>
        <span className={classes['featured-title']}>
          <h1>Upcoming Movies</h1>
        </span>
      </div>
      {ftContent}
      <div className={classes.headings}>
        <h1>Most Popular Movies</h1>
      </div>
      {popContent}
      <div className={classes.headings}>
        <h1>Best Movies by Rating</h1>
      </div>
      {bestContent}
      <footer>
        <div>
          Created from scratch by{' '}
          <a href='https://github.com/OrMizL'>Or Mizrahi</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Homepage;
