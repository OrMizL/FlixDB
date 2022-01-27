import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SliderItem from './SliderItem';
import classes from './Slider.module.css';

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = props.results.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className={classes.slider}>
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        className={classes.arrowLeft}
        onClick={prevSlide}
      />
      {props.results.map((slide, index) => {
        return (
          <div className={classes.env} key={index}>
            {index === currentSlide && (
              <SliderItem
                title={slide.title}
                poster={slide.poster_path}
                rating={slide.vote_average}
                releaseYear={slide.release_date.split('-')[0]}
              />
            )}
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faArrowCircleRight}
        className={classes.arrowRight}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider;
