import MainMovieHead from "./MainMovieHead";
import MainSection from "./MainSection";

const Main = (props) => {
  return (
    <main>
      <MainMovieHead />
      <MainSection {...props} />
    </main>
  );
};

export default Main;
