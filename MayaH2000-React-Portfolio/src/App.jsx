import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import AboutMe  from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Footer from '../src/components/Footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
