import { faCartShopping, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNav,
  LinkStyle,
  LogoBox
} from "./header-styled";

import { useUserDispatch, useUserState } from "../context/UserContext";
import { getIsAdmin } from "../utils/utils";

// firebase 라이브러리
import { auth } from "../firebase";


const Header = () => {
  const { isLoggedIn } = useUserState();
  const dispatch = useUserDispatch();
  const isAdmin = getIsAdmin();
  // console.log(isAdmin);
  
  // firebase user info
  const user = auth.currentUser;
  console.log('유저옴?', user);
  
  // 선택사항 - firebase의 토큰 처리 
  if (user) {
    user.getIdToken()
      .then((idToken) => {
        console.log('ID Token아이디토큰:', idToken);
      })
      .catch((error) => {
        console.error('Error getting ID Token:', error);
      });
  } else {
    console.error('No user is currently signed in.');
  }


  // 기존 로그아웃 제출
  // const logoutSubmit = () => {
  //   if (confirm("로그아웃 하시겠습니까?")) {
  //     localStorage.removeItem("token");
  //     dispatch({
  //       type: "LOGOUT",
  //     });
  //     console.log("로그아웃 완료");
  //   }
  // };

  // // firebase 로그아웃
  const logoutSubmit = async () => {
    const logOut = window.confirm('로그아웃 하시겠습니까?')
    if (logOut) {
      await auth.signOut()
      navigate('/')
      
    }
  }

  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/img/logo7.png"} alt="LOGO" />
          </Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            {isAdmin && (
              <li>
                <LinkStyle to="/admin">
                  <FontAwesomeIcon icon={faUnlockKeyhole} />
                </LinkStyle>
              </li>
            )}
            {/* 기존 로그인 헤더 */}
            {/* {isLoggedIn && isLoggedIn ? (
              <li onClick={logoutSubmit}>
                <LinkStyle to="/">LOGOUT</LinkStyle>
              </li>
            ) : (
              <li>
                <LinkStyle to="/login">LOGIN</LinkStyle>
              </li>
            )} */}

            {/* firebase 로그인 user 헤더 */}
            {user ? (
              <li onClick={logoutSubmit}>
                <LinkStyle to="/">LOGOUT</LinkStyle>
              </li>
            ) : (
              <li>
                <LinkStyle to="/login">LOGIN</LinkStyle>
              </li>
            )}

            <li>
              <LinkStyle to="/myaccount">
                <FontAwesomeIcon icon={faUser} />
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </LinkStyle>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
