import React from "react";
import { AdminWrapper, AdminNav } from "./Admin-styled";

const Admin = () => {
  return (
    <>
      <AdminWrapper>
        <div>
          <AdminNav>
            <button>주문 관리</button>
          </AdminNav>

          <AdminNav>
            <button>카테고리 관리</button>
          </AdminNav>

          <AdminNav>
            <button>제품 내역</button>
          </AdminNav>

          <AdminNav>
            <button>상품 추가</button>
          </AdminNav>
        </div>
      </AdminWrapper>
    </>
  );
};

export default Admin;
