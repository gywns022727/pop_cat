import React from "react";
import styled from "styled-components";
import bk from "../assets/images/bk.jpeg";
import Cat from "../assets/images/p.png";

export default function Pc() {
  return (
    <Wrap>
      <h1>모바일로 접속해주세요!</h1>
      <CatImg src={Cat} alt="cat" />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: 50%;
    left: 50%;
    z-index: -1;
    background-image: url(${bk});
    transform: translate(-50%, -50%) rotate(-3deg);
    background-repeat: repeat-x;
    background-size: contain;
  }
`;

const CatImg = styled.img`
  margin-top: 50px;
  width: 400px;
`;
