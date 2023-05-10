import React, {useState} from 'react';
import {CartWrapper, CartList, PayInfo} from "./styled";

const Cart = () => {
  const carts = [];
  const [count, setCount] = useState(0);

  const increase = (e) => {
    e.preventDefault();
    setCount((current) => current += 1)
  }
  const decrease = (e) => {
    e.preventDefault();
    setCount((current) => current -= 1);
  }

  for(let i = 0; i < 5; i++) {
    const cart = (
      <li>
        <input type="checkbox" id="" />
        <img
          src="https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dw2194b9cd/images/images/packshots/K1829-554-1.jpg?sh=2000"
          alt="Product"
        />
        <div>
          <p>HAIR BAND</p>
          <p>HAIR BAND LOGO METALLIC NEEDLEWORK_NAVY GOLD</p>
          <p>₩280,000</p>
          <div>
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
          </div> 
        </div>
        <p>DELETE</p>
      </li>
    );
    carts.push(cart);
  }
  return (
    <>
      <CartWrapper>
        <div>
          <p>
            <span>장바구니</span> &#62; 주문결제 &#62; 주문완료{" "}
          </p>
        </div>
        <div>
          <CartList>
            <form>
              <input type="checkbox" id="allcheck" />
              <label htmlFor="allcheck">ALL</label>
              <ul>
                {carts}
              </ul>
            </form>
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>상품수</li>
                <li>상품 금액</li>
                <li>배송비</li>
              </ul>
              <p>총 결제금액</p>
            </div>
            <button>쇼핑백 비우기</button>
            <button>주문 하기</button>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
