import React, {useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
const Nav = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <NavContainer>
          <ul>
            <li onClick={() => {setFlag(!flag)}}>
              <span>SHOP</span>
                {flag && <DropDown />}
            </li>
            <li><LinkStyle to="/">COLLECTION</LinkStyle></li>
            <li><LinkStyle to="/">ABOUT</LinkStyle></li>
            <li><LinkStyle to="/">BOARD</LinkStyle></li>
          </ul>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  padding: 110px 40px;
  box-sizing: border-box;

  > ul > li:not(:last-of-type) {
    margin-bottom: 20px;
  }

  span {
    cursor: pointer;
  }
`

const LinkStyle = styled(Link)`
  display: inline-block;
  color: #000;
  text-decoration: none;
`;

export default Nav;
