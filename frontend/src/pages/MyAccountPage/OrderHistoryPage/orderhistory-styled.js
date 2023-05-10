import styled from "styled-components";

export const OrderHistoryWrapper = styled.div`
  max-width: 1000px;
`;

export const TitleWrapper = styled.div`
  width: 280px;
  h1 {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
`;

export const OrderedItemListWrapper = styled.div``;

export const OrderedItemWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;
export const ItemImageWrapeer = styled.div`
  width: 160px;
  height: 120px;
  background-color: #ddd;

  img {
    width: 160px;
    object-fit: cover;
  }
`;
export const ItemInfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p {
      font-size: 18px;
      font-weight: bold;
    }
    div > p {
      /* color: #666; */
      margin-top: 10px;
    }
  }
  > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      text-align: right;
    }

    button {
      font-size: 14px;
      background-color: #ddd;
      border: none;
      padding: 5px 7px;
      cursor: pointer;
    }
  }
`;
