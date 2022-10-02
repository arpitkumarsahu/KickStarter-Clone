import React from "react";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  width: 25%;
  margin: auto;
  margin-top: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Box = styled.div`
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const Box2 = styled.div`
  padding: 20px;
`;

const H = styled.h1`
  margin-top: -10px;
  border-top: 1px solid lightgrey;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0px 10px 0px;
  border: none;
  border: 1px solid lightgrey;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0px 10px 0px;
  background-color: #028858;
  border: none;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Apple = styled.button`
  width: 100%;
  padding: 10px 0px 10px 0px;
  background-color: black;
  border: none;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Lorem = styled.p`
  font-size: 12px;
  color: grey;
`;

function SIgnupBox() {
  const navigate = useNavigate();
  return (
    <Div>
      <Box>
        <center>
          <p>
            Have an Account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </center>
        <H>Signup</H>
        <Input type="text" placeholder="    Name" /> <br />
        <Input type="text" placeholder="    Email" /> <br />
        <Input type="text" placeholder="    Password" />
        <div style={{display:"flex"}}>
          <input type="checkbox" />{" "}
          <p style={{fontSize:"11px"}}>
            Send me a weekly mix of handpicked projects, plus occasional
            Kickstarter news
          </p>
        </div>
        <div style={{display:"flex"}}>
          <input type="checkbox" />{" "}
          <p style={{fontSize:"11px"}}>
          Contact me about participating in Kickstarter research
          </p>
        </div>
        <Button onClick={() => navigate("/login")}>Create account</Button>
        <Lorem>
          By signing up, you agree to our Privacy Policy, Cookie Policy and
          Terms of Use.
        </Lorem>
      </Box>
      <Box2>
        <Apple>
          <i>
            <FaApple />
          </i>{" "}
          Sign in with Apple
        </Apple>
      </Box2>
    </Div>
  );
}

export default SIgnupBox;
