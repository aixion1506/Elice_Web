import React from "react";
import { LayoutWrapper } from "../../../components/common-styled";
import { OrderHistoryWrapper, TitleWrapper } from "./orderhistory-styled";
import OrderedItemList from "./OrderedItemList";

const OrderHistory = () => {
  return (
    <LayoutWrapper>
      <OrderHistoryWrapper>
        <TitleWrapper>
          <h1>ORDER HISTORY</h1>
        </TitleWrapper>
        <OrderedItemList />
      </OrderHistoryWrapper>
    </LayoutWrapper>
  );
};

export default OrderHistory;
