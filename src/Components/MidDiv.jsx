import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const H3 = styled.h3`
color: rgb(3, 115, 98);

&:hover{
  color: green;
}
`;

const P = styled.p`
 color: grey;
 &:hover{
  color: black;
 }
`;

function MidDiv() {
  const navigate = useNavigate()
  return (
    <div style={{width: "30%", cursor:"pointer"}}>
        <img style={{
            width: "400px",
            height: "250px"
        }} 
        src="https://ksr-ugc.imgix.net/assets/037/956/828/ba416bb00f60eb184724ef6c475af1d9_original.JPG?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1657814703&auto=format&frame=1&q=92&s=3bf4cf1cbe873b553ba0a990e6d0fb9d" alt="Headline" />
        <H3 onClick={()=>navigate('/projects')}>Harpanno's Debut Album</H3>
        <P onClick={()=>navigate('/projects')}>A debut album of newly composed music by a trio of Irish musicians</P>
    </div>
  )
}

export default MidDiv