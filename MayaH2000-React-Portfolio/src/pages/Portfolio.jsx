function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Maya Hernandez's Portfolio</h1>
      <h2>Click on the titles for the GitHub links and the images for the deployed applications.</h2>
      <div className="portfolio-item">
        <a href="https://github.com/MayaH2000/BookSearchEngine" target="_blank" rel="noopener noreferrer">
          <h2>Book Search Engine Github</h2>
        </a>
        <a href="https://booksearchengine-s7hz.onrender.com/" target="_blank" rel="noopener noreferrer">
          <img src="/BookSearchEngine.png" width={400} height={200} alt="Book Search Engine" />
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://github.com/natemcmahon/VANMosaic" target="_blank" rel="noopener noreferrer">
          <h2>VANMosaic</h2>
        </a>
        <a href="https://vanmosaic-29816570a7c2.herokuapp.com//" target="_blank" rel="noopener noreferrer">
          <img src="/vanmosaic.png" width={400} height={200} alt="VANMosaic" />
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://github.com/whimsically/gamenight" target="_blank" rel="noopener noreferrer">
          <h2>GAME NIGHT</h2>
        </a>
        <a href="https://glacial-stream-96074-464bdf1b26a2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="/gamenight.png" width={400} height={200} alt="Game Night" />
        </a>
      </div>
      <div className="portfolio-item">
        <a href="https://github.com/evan-hatley/StockGlobetrotter" target="_blank" rel="noopener noreferrer">
          <h2>StockGlobeTrotter</h2>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/stockglobetrotter.png" width={400} height={200} alt="Stock Globe Trotter" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
