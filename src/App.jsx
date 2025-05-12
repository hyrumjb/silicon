import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Acquired from './pages/Acquired';
import Independent from './pages/Independent';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acquired" element={<Acquired />} />
            <Route path="/independent" element={<Independent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;