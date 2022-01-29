import Homepage from './pages/Homepage';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
