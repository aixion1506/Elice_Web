import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  OrderlistWrapper,
  OrderlistTitle,
  OrderlistItems,
  OrderlistTable,
  DeleteButton,
} from "./Orderlist-styled";
import { LayoutWrapper } from "../../components/common-styled";

const Orderlist = () => {
  const dummyList = [
    {
      name: "하얀티셔츠",
      inventory: 10,
      status: "상품 준비중",
      price: 10000,
    },
    {
      name: "까만티셔츠",
      inventory: 12,
      status: "판매중",
      price: 15000,
    },
  ];
  const [orderName, setorderName] = useState("제품명");
  const [orderInventory, setorderInventory] = useState("주문정보");
  const [orderStatus, setorderStatus] = useState("상태");
  const [orderPrice, setproductPrice] = useState("가격");
  const [orderList, setorderList] = useState(dummyList);

  useEffect(() => {}, [orderList]);
  const add = ({ name, inventory, status, price }) => {
    setorderList([...orderList, { name, inventory, status, price }]);
  };
  return (
    <LayoutWrapper>
      <OrderlistWrapper>
        <h1>주문조회</h1>

        <OrderlistTable>
          <ul>
            <OrderlistTitle>
              <div>날짜</div>
              <div>주문정보</div>
              <div>상태</div>
              <div>신청</div>
            </OrderlistTitle>
            {orderList.map((item, index) => {
              return (
                <OrderlistItems key={index} className="key">
                  <div>{item.name}</div>
                  <div>{item.inventory}</div>
                  <div>{item.status}</div>
                  <div>{item.price}</div>
                  <div>
                    <DeleteButton>삭제</DeleteButton>
                  </div>
                </OrderlistItems>
              );
            })}
          </ul>
        </OrderlistTable>
      </OrderlistWrapper>
    </LayoutWrapper>
  );
};

export default Orderlist;
