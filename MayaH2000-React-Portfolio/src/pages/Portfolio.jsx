// Home component displaying Maya Marie Hernandez's portfolio projects
function Portfolio() {
  return (
      <div className="portfolio">
          <h1>Maya Hernandez's Portfolio</h1>
          <h2>Click on the titles for the GitHub links and the images for the deployed applications.</h2>
          <div>
              <a href="https://github.com/MayaH2000/BookSearchEngine" target="_blank" rel="noopener noreferrer">
                <h2>Book Search Engine Github</h2>
              </a>
              <a href="https://booksearchengine-s7hz.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/BookSearchEngine.png" width={720} height={500} alt="Book Search Engine" />
              </a>
          </div>
      </div>
  );
}

export default Portfolio;