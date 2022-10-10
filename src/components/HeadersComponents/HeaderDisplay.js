import HeaderButtons from "./HeaderButtons";

const HeaderDisplay = ({ navDisplay }) => {
  return (
    <div className="container">
      <div className="flex-header-text-container">
        {navDisplay.map((el) => {
          return (
            <>
              <h1 key={el.head}>{el.head}</h1>
              <div>
                <ul>
                  <li key={el.quality}>{el.quality}</li>
                  <li key={el.rate}>
                    <i className="fa-solid fa-star"></i> {el.rate}
                  </li>
                  <li key={el.duration}>{el.duration} min</li>
                  <li key={el.genre[0]}>
                    <a href="http://www.google.com">{el.genre[0]}</a>
                    <a href="http://www.google.com">{el.genre[1]}</a>
                  </li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                dolores obcaecati optio id voluptas est eos, delectus quibusdam
              </p>
            </>
          );
        })}
        <HeaderButtons />
      </div>
    </div>
  );
};

export default HeaderDisplay;
