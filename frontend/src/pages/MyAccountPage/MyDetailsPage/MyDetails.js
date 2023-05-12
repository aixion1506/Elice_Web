import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "../../../routes/route";
import axios from "axios";
import * as API from "../../../utils/api";
import { getUserId } from "../../../utils/utils";

import {
  MyDetailsWrapper,
  DetailFormWrapper,
  TitleWrapper,
  GotoSignout,
  CancelButton,
} from "./mydetails-styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../../components/common-styled";

const MyDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate(ROUTE.LOGIN.link);
    }
  }, []);

  const getUserAPI = async () => {
    try {
      const { data } = await API.get("/users/account");
      console.log("get user", data);

      /** 유저 정보 값 */
      setEmail(data.email);
      setName(data.name);
      setAddress1(data.address1 ? data.address1 : address1);
      setAddress2(data.address2 ? data.address2 : address2);
      setZipCode(data.zipCode ? data.zipCode : zipCode);
      setCity(data.city ? data.city : city);
      setPhoneNumber(data.phoneNumber ? data.phoneNumber : phoneNumber);
    } catch (err) {
      console.log("Err", err?.response?.data);
    }
  };

  const userEditAPI = async () => {
    const userId = getUserId();

    try {
      const { data } = await API.patch(`/users/account/${userId}`, {
        name,
        password,
        currentPassword,
        address1,
        address2,
        zipCode,
        city,
        phoneNumber,
      });

      console.log("useredit", data);
      alert("수정이 완료되었습니다.");
      navigate("/");
    } catch (err) {
      console.log("Err", err?.response?.data);
    }
  };

  /** 사용자 정보 불러오기 */
  useEffect(() => {
    getUserAPI();
  }, []);

  /** 사용자 정보 제출 */
  const userDetailSubmit = (e) => {
    e.preventDefault();
    userEditAPI();
  };

  return (
    <LayoutWrapper>
      <MyDetailsWrapper>
        <TitleWrapper>
          <h1>MY DETAILS</h1>
        </TitleWrapper>
        <DetailFormWrapper onSubmit={userDetailSubmit}>
          <InputWrapper>
            <label>이메일</label>
            <input type="text" required value={email} readOnly />
          </InputWrapper>
          <InputWrapper>
            <label>이름</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호 변경</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="변경할 비밀번호를 입력하세요(8글자 이상)"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>현재 비밀번호</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력하세요"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>주소</label>
            <input
              type="text"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>상세주소</label>
            <input
              type="text"
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>우편번호</label>
            <input
              type="text"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>도시</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>전화번호</label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputWrapper>
          <Button>APPLY</Button>
          <CancelButton>
            <Link to="../">CANCEL</Link>
          </CancelButton>
          <GotoSignout>
            <Link to={ROUTE.DELETEACCOUNT.link}>DELETE ACCOUNT</Link>
          </GotoSignout>
        </DetailFormWrapper>
      </MyDetailsWrapper>
    </LayoutWrapper>
  );
};

export default MyDetails;
