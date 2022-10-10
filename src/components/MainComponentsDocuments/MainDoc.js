import MainTvHeader from "../MainComponentsTv/MainTvHeader";
import MainSection from "../MainComponenetsMovies/MainSection";
const MainDoc = (props) => {
  return (
    <>
      <MainTvHeader props={"Documentary"} type={"documents"} />
      <MainSection {...props} />
    </>
  );
};

export default MainDoc;
