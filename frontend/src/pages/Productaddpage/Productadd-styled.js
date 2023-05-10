import styled from "styled-components";

export const ProductaddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  > div:first-child {
    font-size: 50px;
  }
`;

export const ProductaddNav = styled.div`
  font-size: 20px;

  input {
    padding: 20px;
    font-size: 15px;
    width: 900px;
  }

  input[type="file"] {
    border: 1px solid black;
  }

  label {
    color: black;
  }
  textarea {
    padding: 20px;
    font-size: 15px;
    width: 900px;
    height: 100px;
  }

  select {
    padding: 20px;
    font-size: 15px;
    width: 900px;
  }
`;
