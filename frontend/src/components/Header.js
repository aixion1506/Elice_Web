import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/"><img src="https://global.mardimercredi.com/img/logo-red.png" alt="LOGO" /></Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            <li><LinkStyle to="/login">LOGIN</LinkStyle></li>
            <li><LinkStyle to="/"><FontAwesomeIcon icon={faUser} /></LinkStyle></li>
            <li><LinkStyle to="/cart"><FontAwesomeIcon icon={faCartShopping} /></LinkStyle></li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
`
const LogoBox = styled.div`
  img {
    width: 200px;
  }
`;

const HeaderNav = styled.div`
  ul {
    display: flex;
    align-items: center;
    height: 100%;

    li:not(:first-of-type) {
      margin-left: 25px;
      font-size: 20px;
    }
  }
`;

const LinkStyle = styled(Link)`
  color: #000;
  text-decoration: none;
`

export default Header;
