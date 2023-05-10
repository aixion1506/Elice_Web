import styled from "styled-components"; 

export const CategoryWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);
  padding: 50px 100px;
  box-sizing: border-box;

  p {
    padding-bottom: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;
    font-size: 26px;
    text-align: center;
    background-color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    
    label:first-of-type {
      display: block;
      margin-bottom: 10px;
      font-size: 20px;
    }

    div:first-of-type {
      margin-bottom: 20px;
      input {
        width: 90%;
        box-sizing: border-box;
      }
    }

    li:not(:last-of-type) {
      margin-bottom: 10px;
    }

    input {
      padding: 0 10px;
      width: 80%;
      box-sizing: border-box;
    }

    button {
      margin-left: 2%;
      width: 8%;
      font-size: 18px;
      color: #fff;
      background-color: black;
      box-sizing: border-box;
      cursor: pointer;
    }

    input, button {
      height: 50px;
    }

    button:last-of-type {
      color: #000;
      background-color: #fff;
    }
  }
`;