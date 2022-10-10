const MainTvHeader = ({ props, type }) => {
  return (
    <section>
      <div className="container-movies">
        <div className="flex-container-tv">
          <h2 id={type}>{props}</h2>
          <span>
            Show All<i className="fa-solid fa-circle-play"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default MainTvHeader;
