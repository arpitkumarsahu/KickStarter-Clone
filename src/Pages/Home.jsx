import React from "react";
import { Best } from "../Components/Best";
import Interview from "../Components/Interview";
import MidDiv from "../Components/MidDiv";
import Poster from "../Components/Poster";
import Slideshow from "../Components/SlideShow";
import Top from "../Components/Top";

function Home() {
  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <Top />
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"60px"}}>
        <Slideshow />
        <MidDiv/>
        <Best/>
      </div>
      <Poster/>
      <Interview/>
    </div>
  );
}

export default Home;
