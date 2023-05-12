import styled from "styled-components";

export const ProductlistWrapper = styled.div`
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

export const ProductlistTable = styled.div`
  li {
    width: 1000px;
    display: flex;
  }
  div {
    padding: 10px;
    width: 25%;
    border: 1px solid black;
  }
`;
export const ProductlistTitle = styled.li`
  background-color: black;
  color: white;
  width: 800px;
  width: 25%;
`;

export const ProductlistItems = styled.li`
  div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: white;
    color: white;
    margin-left: 5px;
    font-size: 15px;
    padding: 5px 10px;
  }
  button:last-of-type {
    background-color: white;
    color: black;
  }
`;

export const EditButton = styled.button`
  background-color: white;
  color: white;
  margin-left: 5px;
  font-size: 15px;
  padding: 5px 10px;
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: white;
  margin-left: 5px;
  font-size: 15px;
  padding: 5px 10px;
`;
