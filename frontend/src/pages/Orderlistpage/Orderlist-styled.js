import styled from "styled-components";

export const OrderlistWrapper = styled.div`
  text-align: center;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 //제목
  {
    font-size: 50px;
    padding: 30px;
  }
`;

export const OrderlistTable = styled.div`
  li {
    width: 1000px;
    display: flex;
  }
  div {
    padding: 10px;
    width: 20%;
    border: 1px solid black;
  }
`;

export const OrderlistTitle = styled.li`
  background-color: black;
  color: white;
  width: 25%;
`;

export const OrderlistItems = styled.li`
  div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: black;
  margin-left: 5px;
  font-size: 15px;
  padding: 5px 10px;
`;
