import React from "react";
import { ProductlistWrapper } from "./Productlist-styled";

const Productlist = () => {
  return (
    <>
      <ProductlistWrapper>
        <p>주문조회</p>
        <div>
          <p>날짜</p>
          <p>주문정보</p>
          <p>상태</p>
          <p>신청</p>
        </div>
      </ProductlistWrapper>
    </>
  );
};

export default Productlist;
