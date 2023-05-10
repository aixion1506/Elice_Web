import React from "react";
import { useCallback } from "react";
import { SingupWrapper, SignupForm, GotoLogin } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { Link } from "react-router-dom";

/**
 * 유효성검사
 * 비밀번호 8자 이상
 * 이름 한글 2자 이상
 * 이메일 유효성
 */

const Signup = () => {
  const signupSubmit = useCallback((e) => {
    e.preventDefault();

    console.log("signup");
  }, []);

  return (
    <SingupWrapper>
      <h1>SIGN UP</h1>
      <SignupForm onSubmit={signupSubmit}>
        <InputWrapper>
          <label>NAME</label>
          <input type="text" required />
        </InputWrapper>
        <InputWrapper>
          <label>EMAIL</label>
          <input type="email" required />
        </InputWrapper>
        <InputWrapper>
          <label>PASSWORD</label>
          <input type="password" required />
        </InputWrapper>
        <InputWrapper>
          <label>PASSWORD CONFIRM</label>
          <input type="password" required />
        </InputWrapper>
        <Button>CREATE ACCOUNT</Button>
        <GotoLogin>
          <Link to="/login">Already have an account?</Link>
        </GotoLogin>
      </SignupForm>
    </SingupWrapper>
  );
};

export default Signup;
