import styled from "styled-components";

export const SingupWrapper = styled.div`
  position: relative;
  top: 100px;
  left: 300px;
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 20px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }
`;

export const SignupForm = styled.form`
  width: 400px;
`;

export const InvalidMessage = styled.div`
  font-size: 0.7rem;
  position: absolute;
  right: 0;
  bottom: -20px;
  color: red;
`;

export const GotoLogin = styled.div`
  text-align: center;
  margin-top: 10px;
  transition: all 0.3s;

  &:hover a {
    opacity: 0.7;
  }
`;
