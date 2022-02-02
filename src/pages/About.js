import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.about}>
      <h1>About This Site</h1>
      <div className={classes.text}>
        <div>
          This demo site was built to showcase some basic React skills. It uses
          react hooks, state management, react router, ajax calls, etc.
        </div>
        <div className={classes.credits}>
          Credit for the information on this site is attributed to: <br />{' '}
          <br />
          <img
            alt='TMDB'
            width='100px'
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
          />
          <br />
          themoviedb.org
        </div>
      </div>
    </div>
  );
};

export default About;
