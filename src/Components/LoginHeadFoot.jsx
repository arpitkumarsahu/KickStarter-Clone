import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 00px 50px 0px 50px;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-family: inherit;

  line-height: 2.4rem;
  color: #282828;
  cursor: pointer;
  & input {
    font-family: inherit;
    border: none;
    height: 30px;
    width: 50px;
    margin-top: 20px;
    cursor: pointer;
  }
  & p:hover {
    colour: green;
    border-bottom: 2px solid green;
  }
`;
const ImgDiv = styled.div`
  & img {
    height: 20px;
    width: 200px;
    padding-top: 25px;
  }
`;


function LoginHeadFoot() {
  const navigate = useNavigate()
  return (
    <div>
       <TopDiv>
        <Div1>
          <p>Discover</p>
          <p>Start a Project</p>
        </Div1>
        <ImgDiv>
          <img
            src="data:image/png;base64,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"
            alt="KickStarter"
            onClick={()=>navigate('/')}
            style={{cursor: "pointer"}}
          />
        </ImgDiv>
        <Div1>
          <input placeholder="Search" type="text" />
          <p onClick={()=>navigate('/login')}>Login</p>
        </Div1>
      </TopDiv>
    </div>
  )
}

export default LoginHeadFoot
