import React from "react";
import Header from "./HeadersComponents/Header";
import MainMovie from "./MainComponenetsMovies/MainMovie";
import MainTv from "./MainComponentsTv/MainTv";
import MainDoc from "./MainComponentsDocuments/MainDoc";
import { objApi } from "../Api";

const App = () => {
  return (
    <>
      {/* Header starts */}
      <Header props={objApi.Header} />
      {/* Header ends */}

      {/* main movie section starts */}
      <MainMovie props={objApi.movies} />
      {/* main movie section ends */}

      {/* main tv section starts */}
      <MainTv props={objApi.tv} />
      {/* main tv section ends */}
      <MainDoc props={objApi.documentary} />
    </>
  );
};

export default App;
