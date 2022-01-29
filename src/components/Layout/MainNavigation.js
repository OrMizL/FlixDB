import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>FlixDB</h1>
      </div>
      <ul className={classes['nav-options']}>
        <li>
          <NavLink
            to='/'
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/genres'
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            Genres
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/watchlist'
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            Watchlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
      <form>
        <input type='text' placeholder='Search Movies/TV' name='search' />
      </form>
    </div>
  );
};

export default MainNavigation;
