import MainMovieHead from "./MainMovieHead";
import MainMovieSection from "./MainMovieSection";

const Main = (props) => {
  console.log(props);
  return (
    <main>
      <MainMovieHead />
      <MainMovieSection props={props} />
    </main>
  );
};

export default Main;
