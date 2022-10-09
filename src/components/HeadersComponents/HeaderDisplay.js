import HeaderButtons from "./HeaderButtons";

const HeaderDisplay = (props) => {
  const headerDisplay = props.props;
  console.log(headerDisplay);
  return (
    <div className="container">
      <div className="flex-header-text-container">
        {headerDisplay.map((el) => {
          return (
            <>
              <h1>{el.head}</h1>
              <div>
                <ul>
                  <li>{el.quality}</li>
                  <li>
                    <i className="fa-solid fa-star"></i> {el.rate}
                  </li>
                  <li>{el.duration} min</li>
                  <li>
                    <a href="">{el.genre[0]}</a>
                    <a href="">{el.genre[1]}</a>
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
