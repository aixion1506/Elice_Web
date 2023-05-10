import React from 'react';
import { CategoryWrapper } from "./styled";

const CategoryManage = () => {
  const cetegoryList = [];
  for(let i = 0; i < 5; i++) {
    const category = (
      <li>
        <input type="text" placeholder="CATEGORY NAME" disabled />
        <button>UPDATE</button>
        <button>DELETE</button>
      </li>
    )
    cetegoryList.push(category)
  }
  return (
    <>
      <CategoryWrapper>
        <form>
          <div>
            <p>CATEGORY MANAGE</p>
            <div>
              <label htmlFor="create">CATEGORY</label>
              <input type="text" id="create" placeholder="CATEGORY NAME" />
              <button>ADD</button>
            </div>
          </div>
          <div>
            <ul>
              {cetegoryList}
            </ul>
          </div>
        </form>
      </CategoryWrapper>
    </>
  );
};

export default CategoryManage;
