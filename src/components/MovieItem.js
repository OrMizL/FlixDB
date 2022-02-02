import Card from './UI/Card';
import classes from './MovieItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const MovieItem = (props) => {
  return (
    <Card>
      <NavLink to={`/${props.id}`} className={classes.link}>
        <div className={classes.pic}>
          <img
            src={`https://image.tmdb.org/t/p/w92/${props.poster}`}
            alt='poster'
          ></img>
        </div>
      </NavLink>
      <div className={classes.details}>
        <h4>
          {props.rating}
          <FontAwesomeIcon icon={faStar} color='goldenrod' />
        </h4>
        <NavLink to={`/${props.id}`} className={classes.link}>
          <h3>{props.title}</h3>
        </NavLink>
      </div>
    </Card>
  );
};

export default MovieItem;
