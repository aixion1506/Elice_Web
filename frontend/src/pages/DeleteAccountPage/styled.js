import styled from "styled-components";

export const DeleteAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 120px;

  h1 {
    padding-top: 20px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }
`;

export const DeleteAccountForm = styled.form`
  width: 400px;
`;

export const CancelButton = styled.div`
  background-color: #fff;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  a {
    text-decoration: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;
