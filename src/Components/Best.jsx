import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: 30%;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  margin: 5px 0;
  & > div {
    background: #f6f6f6;
    line-height: 16px;
    padding: 0;
    margin: 0;
  }
  & img {
    width: 130px;
    padding: 0;
    margin: 0;
    margin: 10px;
  }
`;
const Title = styled.p`
  color: #a32020;
  display: block;
  font: 400 11px Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 14px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
`;
const Desc = styled.p`
  color: #000;
  font: 400 13px Arial, Helvetica, sans-serif;
  line-height: 18px;
  text-decoration: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  margin-right: 10px;

  cursor: pointer;
  :hover {
    color: #a32020;
  }
`;
const H = styled.p`
  border-bottom: 1px solid #dbdbdb;
  color: #000;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 15px;
  margin: 0;
  padding: 3px 0 5px;
`;

export const Best = () => {
  let bst = [
    {
      title: "88% Funded",
      img: "https://ksr-ugc.imgix.net/assets/038/435/914/d2fcd5bfec99bec5ed622ef8314e5f86_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661877031&auto=format&frame=1&q=92&s=26b4c2ea70bf29e154df7bbf544ad59d",
      desc: "SleepaSloth, the Smart Baby Sound Machine that works for YOU",
    },
    {
      title: "62% Funded",
      img: "https://ksr-ugc.imgix.net/assets/038/725/137/fa3af76637289518e8b14a807a36dda5_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1664313473&auto=format&frame=1&q=92&s=6fef7b4a1e63a35aa9dcb3233fdad750",
      desc: "A story about news anchors that profit off of hate, searching for love.",
    },
    {
      title: "457% Funded",
      img: "https://ksr-ugc.imgix.net/assets/038/451/353/ae0126590336a3175c68abf393b44424_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661988714&auto=format&frame=1&q=92&s=7a5701f204393eaff43c557be49360e0",
      desc: "Bilingual Easy Chapter Book for Kids 5+ in English & Traditional Chinese with Zhuyin (bopomofo)",
    },
    {
      title: "4388% Funded",
      img: "https://ksr-ugc.imgix.net/assets/038/645/738/b8e85afdc4a06e4647b2a348830a7c8f_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1663669358&auto=format&frame=1&q=92&s=4986205c00866d3762aa1b2ed7b07d92",
      desc: "Traffic cop sweeps road to ensure motorists don’t skid on loose gravel, earns plaudits online",
    },
    
  ];
  return (
    <Outer>
      <div>
        <H>Recommended for you</H>
      </div>
      <div>
        {bst.map((el, index) => (
          <Flex key={index}>
            <div>
              <img src={el.img} alt="" />
            </div>
            <div>
              <Title>{el.title}</Title>
              <Desc>{el.desc}</Desc>
            </div>
          </Flex>
        ))}
      </div>
    </Outer>
  );
};
