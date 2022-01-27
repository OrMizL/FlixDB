import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>FlixDB</h1>
      </div>
      <ul className={classes['nav-options']}>
        <li>Watchlist</li>
        <li>About</li>
      </ul>
      <form>
        <input type='text' placeholder='Search Movies/TV' name='search' />
      </form>
    </div>
  );
};

export default MainNavigation;
