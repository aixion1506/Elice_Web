import styled from "styled-components";

export const SingoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > div {
    border: 1px solid black;
    width: 800px;
    height: 400px;
    padding: 50px 100px;
    box-sizing: border-box;
  }

  div > div:first-child {
    font-size: 40px;
    text-align: center;
  }

  div > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      padding: 10px 200px;
      margin-bottom: 20px;
    }
  }

  div > div:last-child {
    button {
      background-color: black;
      color: white;
      font-size: 20px;
      padding: 5px 10px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
