import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import bk from "../assets/images/bk.jpeg";

export default function Pop() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [navigate, location]);
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
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
