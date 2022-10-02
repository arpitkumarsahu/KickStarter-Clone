import React from 'react'
import { FaApple, FaFacebookSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Div = styled.div`
width: 25%;
margin: auto;
margin-top: 50px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Box =styled.div`
padding: 20px;
border-bottom: 1px solid lightgrey;
`;

const Box2 =styled.div`
padding: 20px;
`;

const Button =styled.button`
Width: 100%;
padding: 10px 0px 10px 0px;
background-color:#028858;
border: none;
color: white;
margin-bottom: 20px;
cursor: pointer;
`;

const H = styled.h1`
margin-top: -10px;
`;

const Input = styled.input`
Width: 100%;
margin-bottom: 20px;
padding: 10px 0px 10px 0px;
border: none;
border: 1px solid lightgrey;


`;

const P = styled.p`
margin-top: -10px;
font-size: 12px;
color: blue;
cursor: pointer;
`;

const Apple = styled.button`
Width: 100%;
padding: 10px 0px 10px 0px;
background-color: black;
border: none;
color: white;
margin-bottom: 20px;
cursor: pointer;
`;

const Facebook = styled.button`
Width: 100%;
padding: 10px 0px 10px 0px;
background-color: rgb(52, 78, 134);
border: none;
color: white;
margin-bottom: 20px;
cursor: pointer;
`;

const Lorem = styled.p`
font-size: 12px;
color: grey;
`;

function LoginBox() {
  const navigate = useNavigate()
  return (
    <Div>
      <Box>
        <H>Login</H>
        <Input type="text" placeholder='    Email' /><br/>
        <Input type="text" placeholder='    Password' />
        <P>Forget your password ?</P>
        <Button onClick={()=>navigate('/')}>Log in</Button>
      </Box>
      <Box2>
      <Apple><i><FaApple/></i> Sign in with Apple</Apple>
      <Facebook><i><FaFacebookSquare/></i>Coninue with facebook</Facebook>
      <Lorem>Get notified when your friends back and launch projects. We'll never post anything on Facebook without your permission.</Lorem>
      <center><p>New to Kickstarter? <span style={{color:'blue', cursor:"pointer"}} onClick={()=>navigate('/signup')}>Signup</span></p></center>
      </Box2>
    </Div>
  )
}

export default LoginBox
