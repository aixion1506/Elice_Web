import React from "react";
import { ProducteditWrapper, ProducteditNav } from "./Productedit-styled";

const Main = () => {
  return (
    <>
      <ProducteditWrapper>
        <ProducteditNav>
          <p>상품수정</p>
        </ProducteditNav>
        <ProducteditNav>
          <p>제품 이름</p>
          <p>
            <input type="text" placeholder="아이보리 티셔츠"></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>카테고리</p>
          <p>
            <select name="category">
              <option value="category">카테고리를 선택해주세요</option>
              <option value="apple">사과</option>
              <option value="orange">오렌지</option>
            </select>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>제조사</p>
          <p>
            <input type="text" placeholder="00의류제조(주)"></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>요약 설명</p>
          <p>
            <input
              type="text"
              placeholder="제품에 대한 1~2문장의 설명을 적어주세요."
            ></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>상세설명</p>
          <p>
            <textarea placeholder="제품에 대한 상세설명을 적어주세요."></textarea>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>제품사진</p>
          <p>
            <input type="file" placeholder="사진파일"></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>재고수</p>
          <p>
            <input type="text" placeholder="10"></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>가격</p>
          <p>
            <input type="text" placeholder="10000"></input>
          </p>
        </ProducteditNav>
        <ProducteditNav>
          <p>검색 키워드</p>
          <p>
            <input type="text" placeholder="여자옷"></input>
          </p>
        </ProducteditNav>
        <div>
          <button
            onClick={function handleClick() {
              alert("상품정보가 수정되었습니다.");
            }}
          >
            수정
          </button>
          <button
            onClick={function handleClick() {
              alert("해당 상품이 삭제되었습니다.");
            }}
          >
            삭제
          </button>
        </div>
      </ProducteditWrapper>
    </>
  );
};

export default Main;
