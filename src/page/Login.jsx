import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import bk from "../assets/images/bk.jpeg";
import Cat from "../assets/images/p.png";
import ToastifyIcon from "../assets/images/op.png";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();
  const link = (status) => navigate("/pop", { state: status });

  let check = useRef(false);
  const handleLinkonClick = async (data) => {
    if (!check.current) {
      check.current = false;
      // api
      // sendResult.status === 200
      if (true) {
        toast.success("고양이를 클릭해 주세요!", {
          icon: <Icon src={ToastifyIcon} />,
        });
        await new Promise((r) => setTimeout(r, 2000));
        link(true);
      }
    }
  };

  const login = (data) => {
    handleLinkonClick(data);
  };

  return (
    <>
      <Wrap>
        <Header />
        <CatImg src={Cat} alt="cat" />
        <form method="post" onSubmit={handleSubmit(login)}>
          <select
            name="country"
            {...register("country", {
              required: true,
            })}
          >
            <option value="">나라를 선택해 주세요.</option>
            <option value={"한국"}>한국</option>
            <option value={"중국"}>중국</option>
            <option value={"일본"}>일본</option>
          </select>
          {errors.country && <Error>나라를 선택해 주세요.</Error>}
          <input
            type="submit"
            disabled={isSubmitting}
            value={"시작하기!"}
            className="submit"
          />
        </form>
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
  > form {
    display: flex;
    flex-direction: column;
    > select {
      color: #fff;
      margin-bottom: 10px;
      width: 250px;
      height: 35px;
      font-size: 20px;
      border: none;
      border-bottom: 1px solid #fff;
      border-radius: 0px;
      background-color: initial;
      outline: none;
      > option {
        color: #000;
      }
    }
    > .submit {
      height: 30px;
      font-size: 20px;
      font-weight: 300;
      color: #fff;
      border: none;
      border-radius: 50px;
      background-color: #ffc500;
    }
  }
`;

const CatImg = styled.img`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 300px;
`;

const Error = styled.p`
  margin-bottom: 10px;
  color: #e42c2c;
  font-size: 14px;
  letter-spacing: -1px;
`;

const Icon = styled.img`
  width: 20px;
`;
