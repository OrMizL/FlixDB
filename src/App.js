import Homepage from './pages/Homepage';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Genres from './pages/Genres';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/genres' element={<Genres />} />
        {/* <Route path='/watchlist' element={<Navigate replace to='/' />} /> */}
        <Route path='/:movieId' element={<MovieDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
