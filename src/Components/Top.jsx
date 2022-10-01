import React from "react";
import styled from "styled-components";

const Top1 = styled.div`
 margin: auto;
 align-items: center;
 text-align: center;
`;

const Square = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
height: 100px;
margin: auto;
margin-top: 50px;
border: 1px solid lightgray;
border-radius: 3px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
& div {
    border-right: 1px solid lightgray;
    width: 100%;
     text-align: center;
     line-height: 10px
    
    
}
`;

function Top() {
  return (
    <div>
      <Top1>
        <h1>Bring a Creative Project to Life.</h1>
        <p>ON KICKSTARTER.</p>
      </Top1>
      <Square>
        <div><p style={{fontSize: "24px" , fontWeight: "Bold", color:"rgb(3, 115, 98)"}}>222,196</p>project funded</div>
        <div><p style={{fontSize: "24px", fontWeight: "Bold", color:"rgb(3, 115, 98)"}}>$6,261,149,845</p>towards creative work</div>
        <div><p style={{fontSize: "24px", fontWeight: "Bold", color:"rgb(3, 115, 98)"}}>69,897,561</p>pledges</div>
      </Square>
    </div>
  );
}

export default Top;
