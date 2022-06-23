import React, { Fragment } from "react";
import Availblity from "./components/Availblity";
import BasmaCodeChallenge from "./components/BasmaCodeChallenge";
import CodeChallenge from "./components/CodeChallenge";
import MainFrame from "./components/MainFrame";
import PowerfulTools from "./components/PowerfulTools";
import SecondCodeChallenge from "./components/SecondCodeChallenge";
import SharePhotos from "./components/SharePhotos";
import StayTuned from "./components/StayTuned";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <Fragment>
      <MainFrame />
      <CodeChallenge />
      <PowerfulTools />
      <SharePhotos />
      <SecondCodeChallenge />
      <BasmaCodeChallenge />
      <Availblity />
      <Subscribe />
      <StayTuned />
    </Fragment>
  );
}

export default App;
