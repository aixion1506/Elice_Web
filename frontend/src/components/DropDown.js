import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <>
      <ul>
        <ListStyle><LinkStyle to="/product">CATEGORY</LinkStyle></ListStyle>
        <ListStyle><LinkStyle to="/product">CATEGORY</LinkStyle></ListStyle>
        <ListStyle><LinkStyle to="/product">CATEGORY</LinkStyle></ListStyle>
      </ul>
    </>
  );
};

const ListStyle = styled.li`
  margin: 10px 0;
  padding-left: 15px;
  box-sizing: border-box;
`

const LinkStyle = styled(Link)`
  display: inline-block;
  color: #000;
  text-decoration: none;
`
export default DropDown;
