import React from "react";
import { ProductaddWrapper, ProductaddNav } from "./Productadd-styled";

const Main = () => {
  return (
    <>
      <ProductaddWrapper>
        <ProductaddNav>
          <p>상품등록</p>
        </ProductaddNav>
        <ProductaddNav>
          <p>제품 이름</p>
          <p>
            <input type="text" placeholder="아이보리 티셔츠"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>카테고리</p>
          <p>
            <select name="category">
              <option value="category">카테고리를 선택해주세요</option>
              <option value="apple">사과</option>
              <option value="orange">오렌지</option>
            </select>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>제조사</p>
          <p>
            <input type="text" placeholder="00의류제조(주)"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>요약 설명</p>
          <p>
            <input
              type="text"
              placeholder="제품에 대한 1~2문장의 설명을 적어주세요."
            ></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>상세설명</p>
          <p>
            <textarea placeholder="제품에 대한 상세설명을 적어주세요."></textarea>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>제품사진</p>
          <p>
            <input type="file" placeholder="사진파일"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>재고수</p>
          <p>
            <input type="text" placeholder="10"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>가격</p>
          <p>
            <input type="text" placeholder="10000"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>검색 키워드</p>
          <p>
            <input type="text" placeholder="여자옷"></input>
          </p>
        </ProductaddNav>
      </ProductaddWrapper>
    </>
  );
};

export default Main;
