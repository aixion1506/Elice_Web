import styled from "styled-components"; 

export const ProductDetailWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);

  & > div {
    display: flex;
    align-items: center;
    height: calc(100vh - 200px);
  }
  
  & > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const ProductImg = styled.div `
  width: 50%;
  img {
    display: block;
    width: 500px;
    background-size: cover;
  }
`

export const ProductInfo = styled.div `
  flex-direction: column;
  padding-right: 250px;
  width: 50%;
  div {
    width: 100%;
  }

  div:first-child {
    p {
      font-size: 30px;
    }
    span {
      display: block;
      margin: 10px 0;
      font-size: 22px;
    }
  }

  div:nth-child(2) {
    select {
      width: 100%;
      height: 50px;
      margin: 50px 0;
      padding: 0 10px;
      font-size: 18px;
      cursor: pointer;
    }
    button {
      display: block;
      width: 100%;
      height: 70px;
      margin: 15px 0;
      font-size: 20px;
      cursor: pointer;
    }
    button:nth-child(2) {
      background-color: #000;
      color: #fff;
    }
    button:nth-child(3) {
      background-color: #fff;
    }
  }

  div:last-child {
    margin-top: 50px;
    p { 
      font-size: 16px;
      line-height: 22px;
    }
  }
`
