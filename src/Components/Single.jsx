import React from "react";
import styled from "styled-components";
import Interview from "./Interview";

const Div = styled.div`
  width: 70%;
  margin: auto;
`;

const H = styled.h1`
  margin: auto;
  text-align: center;
`;

const Side = styled.div`
display: flex;
gap: 20px;
& img {
    gap: 10px;
}
`;


function Single() {
  return (
    <Div>
      <div>
        <H>Harpanno Debut Album Kickstarter</H>
        <h3 style={{ textAlign: "center" }}>
          Help bring Harpanno's Debut Album to Life
        </h3>
      </div>
      <Side>
        <img width={"60%"} src="https://ksr-ugc.imgix.net/assets/037/956/828/ba416bb00f60eb184724ef6c475af1d9_original.JPG?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1657814703&auto=format&frame=1&q=92&s=3bf4cf1cbe873b553ba0a990e6d0fb9d" alt="Headline"/>
        <img width={"40%"} src="https://i.ibb.co/VjW3JWn/imageDiv.jpg" alt="side" />
      </Side>
      <Interview/>
    </Div>
  );
}

export default Single;
