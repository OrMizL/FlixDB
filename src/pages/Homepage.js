import { Fragment, useEffect, useState } from 'react';
import configData from '../config.json';
import classes from './Homepage.module.css';
import Slider from '../components/UI/Slider';
import MoviesList from '../components/MoviesList';

const Homepage = () => {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [bestMoviesData, setBestMoviesData] = useState([]);
  const [featuredMoviesData, setFeaturedMoviesData] = useState([]);

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

  const fetchFeaturedMovies = async () => {
    // const today = new Date();
    // const todayDay = today.getDate();
    // const todayMonth = today.getMonth() + 1;
    // const dayString = todayDay > 9 ? '-' : '-0';
    // const monthString = todayMonth > 9 ? '-' : '-0';
    // const todayDate = `${today.getFullYear()}${monthString}${todayMonth}${dayString}${todayDay}`;
    // const startMonth = today.getFullYear() + '-' + today.getMonth() + 1 + '-01';

    // const results = await fetch(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=${configData.API_KEY}&language=en-US&primary_release_date.gte=${startMonth}&primary_release_date.lte=${todayDate}&sort_by=vote_average.desc&vote_count.gte=100&vote_average.gte=7`
    // );
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${configData.API_KEY}`
    );
    const data = await results.json();
    const dataTopTen = data.results.slice(0, 10);
    setFeaturedMoviesData(dataTopTen);
  };

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
    setBestMoviesData(dataTopTen);
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchBestMovies();
    fetchFeaturedMovies();
  }, []);
  return (
    <Fragment>
      <div className={classes.featured}>
        <span className={classes['featured-title']}>
          <h1>Upcoming Movies</h1>
        </span>
      </div>
      <Slider results={featuredMoviesData} />
      <div className={classes.headings}>
        <h1>Most Popular Movies</h1>
      </div>
      <MoviesList moviesData={popularMoviesData} />
      <div className={classes.headings}>
        <h1>Best Movies by Rating</h1>
      </div>
      <MoviesList moviesData={bestMoviesData} />
      <footer>
        <div>Made by Or Mizrahi</div>
        <div className={classes.links}>
          <span>contact</span>
          <span>more about us</span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Homepage;
