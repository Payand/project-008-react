import MainMovieHead from "./MainMovieHead";
import MainMovieSection from "./MainMovieSection";

const Main = (props) => {
  return (
    <main>
      <MainMovieHead />
      <MainMovieSection {...props} />
    </main>
  );
};

export default Main;
