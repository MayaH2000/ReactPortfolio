import React from 'react';
import myLogo from './assets/my-logo.png'; // Replace with your logo image
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="ReactPortfolio/MayaH2000-React-Portfolio/src/components/pages/Home.jsx">Home</a></li>
            <li><a href="ReactPortfolio/MayaH2000-React-Portfolio/src/components/pages/About.jsx">About</a></li>
            <li><a href="ReactPortfolio/MayaH2000-React-Portfolio/src/components/pages/Blog.jsx">Blog</a></li>
            <li><a href="ReactPortfolio/MayaH2000-React-Portfolio/src/components/pages/Contact.jsx">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <img src={myLogo} className="logo" alt="My Logo" />
      </div>
      <h1>My Portfolio</h1>
      {/* Add your portfolio content here */}
      <div className="card">
        {/* Your portfolio content goes here */}
      </div>
      {/* Add your project components here */}
      <div className="projects">
        {/* Add your project components here */}
      </div>
      {/* Add your about me content here */}
      <div className="about">
        {/* Add your about me content here */}
      </div>
      {/* Add your contact information here */}
      <div className="contact">
        {/* Add your contact information here */}
      </div>
      
    </>
  );
}

export default App;
