import React from "react";

import { Link } from "react-router-dom";
import { useCallback } from "react";
import { LoginWrapper, LoginForm, GotoSingup } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { LayoutWrapper } from "../../components/common-styled";

const Login = () => {
  const loginSubmit = useCallback((e) => {
    e.preventDefault();

    console.log("login");
  }, []);

  return (
    <LayoutWrapper>
      <LoginWrapper>
        <h1>LOG IN</h1>
        <LoginForm onSubmit={loginSubmit}>
          <InputWrapper>
            <label>EMAIL</label>
            <input type="email" required />
          </InputWrapper>
          <InputWrapper>
            <label>PASSWORD</label>
            <input type="password" required />
          </InputWrapper>
          <Button>LOG IN</Button>
          <GotoSingup>
            <Link to="/signup">Create an account</Link>
          </GotoSingup>
        </LoginForm>
      </LoginWrapper>
    </LayoutWrapper>
  );
};

export default Login;
