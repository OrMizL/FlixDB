import classes from './SingleMovie.module.css';
import { BsStarFill, BsCalendarFill } from 'react-icons/bs';
import { FaCrown, FaFilm, FaVoteYea } from 'react-icons/fa';

const SingleMovie = (props) => {
  return (
    <div className={classes.all}>
      <div className={classes.title}>
        <h1>{props.movieDetails.title}</h1>
      </div>
      <div className={classes.info}>
        <div className={classes.media}>
          {/* <div className={classes.video}>
          {/* <Youtube videoId={movieVideoId}></Youtube> */}
          {/* </div> */}
          <div className={classes.poster}>
            <img src={props.movieDetails.poster} alt='poster'></img>
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.overview}>{props.movieDetails.overview}</div>
          <div className={classes.first}>
            <div>
              <BsStarFill className={classes.icons} />
              {props.movieDetails.rating}
            </div>
            <div>
              <FaVoteYea className={classes.icons} />
              {props.movieDetails.votes}
            </div>
            <div>
              <FaCrown className={classes.icons} />
              {props.movieDetails.popularity}
            </div>
            <div>
              <FaFilm className={classes.icons} />
              {props.movieDetails.runtime}min
            </div>
            <div>
              <BsCalendarFill className={classes.icons} />
              {props.movieDetails.releasedOn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
