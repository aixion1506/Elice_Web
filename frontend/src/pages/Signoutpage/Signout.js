import React from "react";
import { SingoutWrapper } from "./signout-styled";

const Signout = () => {
  return (
    <>
      <SingoutWrapper>
        <div>
          <div>
            <p>회원탈퇴</p>
          </div>
          <div>
            <form>
              <p>현재 비밀번호</p>
              <p>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                ></input>
              </p>
              <button
                onClick={function handleClick() {
                  alert("안전하게 회원탈퇴가 되었습니다.");
                }}
              >
                회원탈퇴하기
              </button>
            </form>
          </div>
        </div>
      </SingoutWrapper>
    </>
  );
};

export default Signout;
