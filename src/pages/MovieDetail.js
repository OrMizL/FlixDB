import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleMovie from '../components/SingleMovie';
import configData from '../config.json';

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState([]);

  const params = useParams();
  const { movieId } = params;

  const fetchMovieDetails = async () => {
    const results = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${configData.API_KEY}`
    );
    const data = await results.json();
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  });

  return (
    <>
      <SingleMovie title={movieDetails.title} />
      <Outlet />
    </>
  );
};

export default MovieDetail;
