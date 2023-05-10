import React, { useCallback, useEffect } from "react";
import {
  OrderedItemWrapper,
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
} from "./orderhistory-styled";

const OrderedItem = (item) => {
  const timeFormat = (time) => {
    const changed = time.replaceAll(". ", "-");
    return changed.replace(".", "");
  };

  const cancelOrder = useCallback(() => {
    if (confirm("주문을 취소하시겠습니까?")) {
      console.log(item.id, "주문 취소");
      return alert("주문이 취소되었습니다.");
    }
  }, []);

  const refundRequest = useCallback(() => {
    if (confirm("환불 신청하시겠습니까?")) {
      console.log(item.id, "환불 신청");
      return alert("환불 신청이 완료되었습니다.");
    }
  }, []);

  return (
    <>
      <OrderedItemWrapper>
        {item && (
          <ItemDetail>
            <div>
              {timeFormat(item.date)}
              <span>({item.orderId})</span>
            </div>
            <ItemWrapper>
              <ItemImageWrapeer>
                {item.image && <img src={item.image} alt={item.title} />}
              </ItemImageWrapeer>
              <ItemInfoWrapper>
                <div>
                  <p>{item.title}</p>
                  <div>
                    <p>KRW {Number(item.price).toLocaleString("ko-KR")}</p>
                    <p>QTY : {item.qty}</p>
                  </div>
                </div>
                <div>
                  <p>{item.status}</p>
                  {item?.status === "결제 완료" ? (
                    <button onClick={cancelOrder}>주문 취소</button>
                  ) : (
                    <button onClick={refundRequest}>환불 신청</button>
                  )}
                </div>
              </ItemInfoWrapper>
            </ItemWrapper>
          </ItemDetail>
        )}
      </OrderedItemWrapper>
    </>
  );
};

export default OrderedItem;
