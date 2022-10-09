import React from "react";
import Header from "./HeadersComponents/Header";
import Main from "./MainComponenetsMovies/Main";
import { objApi } from "../Api";

const App = () => {
  return (
    <>
      <Header props={objApi.Header} />
      <Main props={objApi.movies} />
    </>
  );
};

export default App;
