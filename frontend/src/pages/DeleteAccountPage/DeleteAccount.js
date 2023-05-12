import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  DeleteAccountWrapper,
  DeleteAccountForm,
  CancelButton,
} from "./styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../components/common-styled";
import axios from "axios";
import * as API from "../../utils/api";
import { getUserId } from "../../utils/utils";
import { useUserState, useUserDispatch } from "../../context/UserContext";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, []);

  const deleteAccountAPI = async (userId) => {
    try {
      const { data } = await API.delete(`/users/signout/${userId}`);
      console.log("success", data);
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
      alert("회원탈퇴가 완료되었습니다.");
      navigate("/");
    } catch (err) {
      console.log("Err", err.response);
    }
  };

  const deleteAccountSubmit = (e) => {
    e.preventDefault();
    const userId = getUserId();
    if (
      confirm("정말 회원탈퇴를 하시겠습니까? 탈퇴 후 계정 복구는 불가능합니다.")
    ) {
      deleteAccountAPI(userId);
    }
  };

  return (
    <LayoutWrapper>
      <DeleteAccountWrapper>
        <h1>DELETE ACCOUNT</h1>
        <DeleteAccountForm onSubmit={deleteAccountSubmit}>
          <InputWrapper>
            <label>PASSWORD</label>
            <input
              type="password"
              required
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button>DELETE</Button>
        </DeleteAccountForm>
        <CancelButton>
          <Link to="../">CANCEL</Link>
        </CancelButton>
      </DeleteAccountWrapper>
    </LayoutWrapper>
  );
};

export default DeleteAccount;
