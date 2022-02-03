import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import SingleMovie from '../components/SingleMovie';
import configData from '../config.json';

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState({
    id: '',
    title: '',
    poster: '',
    overview: '',
    rating: null,
    popularity: null,
    runtime: null,
    releasedOn: '',
    votes: null,
  });

  const params = useParams();
  const { movieId } = params;

  const fetchMovieDetails = useCallback(async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${configData.API_KEY}`
    );
    const data = await results.json();
    setMovieDetails({
      id: data.id,
      title: data.title,
      poster: `https://image.tmdb.org/t/p/w300/${data.poster_path}`,
      overview: data.overview,
      rating: data.vote_average,
      popularity: data.popularity,
      runtime: data.runtime,
      releasedOn: data.release_date,
      votes: data.vote_count,
    });
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <>
      <SingleMovie movieDetails={movieDetails} />
      <Outlet />
    </>
  );
};

export default MovieDetail;
