import MovieItem from './MovieItem';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  return (
    <div>
      <ul className={classes.list}>
        {props.moviesData.map((entry) => {
          return (
            <MovieItem
              key={entry.id}
              poster={entry.poster_path}
              title={entry.title}
              rating={entry.vote_average}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
