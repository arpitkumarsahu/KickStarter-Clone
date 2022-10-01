import React from "react";
import { Best } from "../Components/Best";
import Interview from "../Components/Interview";
import Making from "../Components/Making";
import MidDiv from "../Components/MidDiv";
import Poster from "../Components/Poster";
import Poster2 from "../Components/Poster2";
import Poster3 from "../Components/Poster3";
import Slideshow from "../Components/SlideShow";
import Top from "../Components/Top";

function Home() {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <Top />
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"60px"}}>
        <Slideshow />
        <MidDiv/>
        <Best/>
      </div>
      <Poster/>
      <Interview/>
      <Poster2/>
      <Making/>
      <Poster3/>
    </div>
  );
}

export default Home;
