import Card from './UI/Card';
import classes from './MovieItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieItem = (props) => {
  return (
    <Card>
      <div className={classes.pic}>
        <img
          src={`https://image.tmdb.org/t/p/w92/${props.poster}`}
          alt='poster'
        ></img>
      </div>
      <div className={classes.details}>
        <h4>
          {props.rating}
          <FontAwesomeIcon icon={faStar} color='goldenrod' />
        </h4>
        <h3>{props.title}</h3>
      </div>
    </Card>
  );
};

export default MovieItem;
