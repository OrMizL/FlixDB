import classes from './SliderItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faStar } from '@fortawesome/free-solid-svg-icons';

const SliderItem = (props) => {
  return (
    <div className={classes.slide}>
      <div className={classes.pic}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
          alt='poster'
        ></img>
      </div>
      <div className={classes.details}>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.overview}>{props.overview}</div>
        <div className={classes.extras}>
          <div className={classes.extrasItem}>
            {props.rating}
            <FontAwesomeIcon icon={faStar} color='goldenrod' />
          </div>
          <div className={classes.extrasItem}>
            {props.releaseYear}
            <FontAwesomeIcon icon={faCalendar} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
