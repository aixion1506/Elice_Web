import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  height: 100vh;

  > div {
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
  }

  /* > div {
    border: 1px solid black;
    width: 300px;
    height: 150px;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  > div > div:first-child {
    font-size: 40px;
  }

  > div > div:last-child {
    font-size: 20px;
  } */
`;

export const AdminNav = styled.div`
  border: 1px solid white;
  padding: 60px 120px;
  width: 300px;
  margin: 50px;
  text-align: center;

  button {
    font-size: 30px;
    border: none;
    background-color: white;
  }
`;
