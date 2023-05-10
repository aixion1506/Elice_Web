import React from 'react';
import {ProductWrapper} from "./styled";

const Product = () => {
  const products = [];
  for (let i = 0; i < 12; i++) {
    const product = (
      <li>
        <img
          src="https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dw2194b9cd/images/images/packshots/K1829-554-1.jpg?sh=2000"
          alt="Product"
        />
        <div>
          <p>Graphic V-neck Vest</p>
          <span>₩280,000</span>
        </div>
      </li>
    );
    products.push(product);
  }

  return (
    <>
      <ProductWrapper>
        <ul>{products}</ul>
      </ProductWrapper>
    </>
  );
};

export default Product;
