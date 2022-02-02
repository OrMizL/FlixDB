import classes from './SingleMovie.module.css';

const SingleMovie = (props) => {
  return <div className={classes.title}>{props.title}</div>;
};

export default SingleMovie;
