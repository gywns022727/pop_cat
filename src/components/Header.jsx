import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/images/popcatLog.svg";
import ToastifyIcon from "../assets/images/op.png";

export default function Header() {
  const clip = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("링크 복사가 완료되었습니다.", {
      icon: <Icon src={ToastifyIcon} />,
    });
  };
  return (
    <>
      <Wrap>
        <div></div>
        <img src={Logo} alt="logo" />
        <svg viewBox="0 0 512 512" onClick={clip}>
          <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
        </svg>
      </Wrap>
      <ToastContainer
        position="top-center"
        autoClose={800}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  > div {
    width: 30px;
  }

  > img {
    width: 150px;
  }
  > svg {
    width: 30px;
    filter: invert(100%) sepia(0%) saturate(7417%) hue-rotate(158deg)
      brightness(119%) contrast(112%);
  }
`;

const Icon = styled.img`
  width: 20px;
`;
