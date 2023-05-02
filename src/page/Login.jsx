import React from "react";
import styled from "styled-components";
import bk from "../assets/images/bk.jpeg";
import Header from "../components/Header";

export default function Login() {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
