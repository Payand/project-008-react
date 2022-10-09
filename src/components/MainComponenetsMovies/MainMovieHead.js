const MainMovieHead = () => {
  return (
    <section>
      <div className="container">
        <div className="flex-container-title">
          <h2>Movies</h2>
          <div>
            <span>
              <i className="fa-solid fa-circle-play"></i>Movies
            </span>
            <span>
              <i className="fa-solid fa-lines-leaning"></i>TV Shows
            </span>
            <span>
              <i className="fa-solid fa-arrow-trend-up"></i>Trending
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMovieHead;
