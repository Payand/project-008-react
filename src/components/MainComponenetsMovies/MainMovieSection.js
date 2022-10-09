const MainMovieSection = ({ props: movies }) => {
  return (
    <section>
      <div id="movies" className="container-movies">
        {movies.map((movie) => {
          return (
            <div className="flex-movies-container">
              <img className="img-card" src={movie.img} alt="poster" />
              <div className="quality">{movie.quality}</div>
              <div className="flex-card-box">
                <p>
                  {movie.title.length > 20
                    ? movie.title.substring(0, 15) + "..."
                    : movie.title}
                </p>
                <div className="flex-card-box-details">
                  <span>
                    {movie.year}
                    <i className="fa-solid fa-circle"></i>
                    {movie.duration} min
                  </span>
                  <span>{movie.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainMovieSection;
