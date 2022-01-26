import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>FlixDB</h1>
      </div>
      <form>
        <input type='text' placeholder='Search Movies/TV' name='search' />
      </form>
      <ul className={classes['nav-options']}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default MainNavigation;
