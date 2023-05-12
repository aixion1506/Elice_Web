import React, { useState, useEffect } from "react";
import {
  ProductlistWrapper,
  ProductlistTitle,
  ProductlistItems,
  ProductlistTable,
  EditButton,
  DeleteButton,
} from "./Productlist-styled";
import { Link } from "react-router-dom";
import { LayoutWrapper } from "../../components/common-styled";
import axios from "axios";

const Productlist = () => {
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
  const [productName, setproductName] = useState("");
  const [productInventory, setproductInventory] = useState("");
  const [productStatus, setproductStatus] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productList, setProuctList] = useState(dummyList);

  useEffect(() => {
    Productlist();
  }, []);
  const Productlist = async () => {
    const response = await axios.get(`http://localhost:8001/api/products`);
    const testList = response.data;
    setProuctList(testList);
    console.log(testList);
    // const productdelete = await axios.delete(
    //   `http://localhost:8001/api/products`
    // );

    // setProuctList([...productList, { name, inventory, status, price }]);
  };
  // const DeleteButton = () => {
  //   if (confirm("상품을 삭제 하시겠습니까?")) {
  //     console.log(item.id, "상품 삭제");
  //     return alert("상품이 삭제되었습니다.");
  //   }
  // };
  //

  return (
    <LayoutWrapper>
      <ProductlistWrapper>
        <h1>제품내역</h1>

        <ProductlistTable>
          <ul>
            <ProductlistTitle>
              <div>제품명</div>
              <div>주문정보</div>
              <div>제조사</div>
              <div>가격</div>
              <div></div>
            </ProductlistTitle>

            {productList.map((item, index) => {
              return (
                <ProductlistItems key={index} className="key">
                  <div>{item.title}</div>
                  <div>{item.inventory}</div>
                  <div>{item.manufacturer}</div>
                  <div>{item.price}</div>
                  <div>
                    <EditButton>
                      <Link
                        to="../productedit"
                        style={{ textDecoration: "none" }}
                      >
                        수정
                      </Link>
                    </EditButton>
                    <DeleteButton>삭제</DeleteButton>
                  </div>
                </ProductlistItems>
              );
            })}
          </ul>
        </ProductlistTable>
      </ProductlistWrapper>
    </LayoutWrapper>
  );
};

export default Productlist;
