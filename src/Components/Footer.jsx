import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, IconName } from "react-icons/fa";

const Nav = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-family: inherit;
  & p:hover {
    colour: green;
    border-bottom: 2px solid green;
  }
`;

const Foot = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
& h3 {
    font-size: 14px;
} & p {
    font-size: 14px;
}
`;
const Base = styled.div`
width: 70%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 50px;
`;

const Sym = styled.div`
display: flex;
  gap: 15px;
  font-size: 24px;
  
& i {
    padding: 10px;
}
`


function Footer() {
  return (
    <div>
        <div style={{ borderBottom: "1px solid lightgrey", borderTop:"1px solid lightgrey", marginTop: '20px' }}>
        <Nav>
          <p>Arts</p>
          <p>Commmmic & Illustration</p>
          <p>Design & Tech</p>
          <p>Film</p>
          <p>Food & Crafts</p>
          <p>Games</p>
          <p>Music</p>
          <p>Publishing</p>
        </Nav>
      </div>
      <Foot>
        <div>
            <h3>ABOUT</h3>
            <p>About Us</p>
            <p>Our Charter</p>
            <p>Stats</p>
            <p>Press</p>
            <p>jobs</p>
        </div>
        <div>
            <h3>SUPPORT</h3>
            <p>Help Center</p>
            <p>Our Rules</p>
            <p>Creator Resources</p>
            <p>Brand assets</p>
            <p>Forword Funds</p>
        </div>
        <div>
            <h3>MORE FROM KICKSTARTER</h3>
            <p>Newsletters</p>
            <p>Independent</p>
            <p>The Kickstarterr Blog</p>
            <p>Mobile apps</p>
            <p>Research</p>
        </div>
      </Foot>
      <Base>
        <p>Kickstarter, PBC © 2022</p>
        <Sym>
            <i><FaYoutube/></i>
            <i><FaFacebook/></i>
            <i><FaInstagram/></i>
            <i><FaTwitter/></i>
        </Sym>
      </Base>
    </div>
  )
}

export default Footer