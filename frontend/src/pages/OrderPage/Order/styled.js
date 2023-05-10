import styled from "styled-components"; 

export const OrderWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);

  & > div {
    display: flex;
    position: relative;
  }

  > div:first-child {
    width: 90%;
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;

    p {
      color: #a0a0a0;
      font-size: 26px;
      span {
        color: #000;
        font-size: 40px;
      }
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }
`;

export const OrderInfo = styled.div `
  margin: 0 2.5% 0 0;
  width: 62.5%;

  > p {
    padding: 0 0 10px 20px;
    font-size: 26px;
    border-bottom: 1px solid #000;
  }
  
  form {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 0;
    
    > div {
      label {
        display: inline-block;
        min-width: 110px;
        font-size: 22px;
        margin-right: 5%;
      }

      input {
        padding: 0 20px;
        min-width: 80%;
        height: 70px;
        box-sizing: border-box;
        font-size: 22px;
      }
    }
    
    > div:first-child {
      margin-top: 35px;
    }

    > div:not(:last-child) {
      margin-bottom: 35px;
    }
  }
`

export const PayInfo = styled.div `
  padding-right: 160px;
  width: 35%;
  p, li {
    padding: 0 0 10px 20px;
  }

  p:first-child {    
    font-size: 26px;
  }

  p:last-child {
    margin: 50px 0;
    font-size: 20px;
  }

  ul {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 50px 0;

    li {
      font-size: 20px;
    }

    li:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  button {
    display: block;
    width: 100%;
    height: 70px;
    font-size: 20px;
    background-color: #fff;
    cursor: pointer;
  }
  button:last-child {
    margin-top: 20px;
    background-color: #000;
    color: #fff;
  }
`