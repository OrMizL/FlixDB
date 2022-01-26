import { Fragment } from 'react';
import MainNavigation from './components/Layout/MainNavigation';

function App() {
  const fetchMoviesHandler = async () => {
    const results = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=85b6cb8ed71b2f68b11d9bea9f3fa027'
    );
    const data = await results.json();
    console.log(data);
  };

  return (
    <Fragment>
      <header>
        <MainNavigation />
      </header>
      <div>
        <button onClick={fetchMoviesHandler}>Retrieve Movies</button>
      </div>
    </Fragment>
  );
}

export default App;
