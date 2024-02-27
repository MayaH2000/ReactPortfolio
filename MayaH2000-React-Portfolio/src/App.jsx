import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import AboutMe  from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Blog';
import Footer from '../src/components/Footer/Footer';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
