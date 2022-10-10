import MainTvHeader from "./MainTvHeader";
import MainSection from "../MainComponenetsMovies/MainSection";
const MainTv = (props) => {
  return (
    <>
      <MainTvHeader props={"Tv-shows"} type={"tv-series"} />
      <MainSection {...props} />
    </>
  );
};

export default MainTv;
