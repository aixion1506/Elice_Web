import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { LoginWrapper, LoginForm, GotoSingup } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { LayoutWrapper } from "../../components/common-styled";
import { post } from "../../utils/api";

import { useUserDispatch } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useUserDispatch();

  /** 로그인 API */
  const loginAPI = async (userData) => {
    try {
      const { data } = await post("/users/login", userData);
      console.log("login", data.isAdmin);
      localStorage.setItem("token", data.token);
      dispatch({
        type: "LOGIN",
        isAdmin: data.isAdmin,
      });
      navigate("/");
    } catch (err) {
      console.log("Error", err?.response?.data);
      // navigate("/login");
      alert("이메일 또는 비밀번호를 확인해주세요");
    }
  };

  /** 로그인 제출 */
  const loginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      loginAPI({ email, password });
      setEmail("");
      setPassword("");
    },
    [email, password]
  );

  return (
    <>
      <LayoutWrapper>
        <LoginWrapper>
          <h1>LOG IN</h1>
          <LoginForm onSubmit={loginSubmit}>
            <InputWrapper>
              <label>EMAIL</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
              />
            </InputWrapper>
            <InputWrapper>
              <label>PASSWORD</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                placeholder="비밀번호를 입력하세요"
              />
            </InputWrapper>
            <Button>LOG IN</Button>
            <GotoSingup>
              <Link to="/signup">Create an account</Link>
            </GotoSingup>
          </LoginForm>
        </LoginWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Login;
