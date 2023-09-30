import * as React from "react";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import { OrderItem } from "../../orderTypes";

const OrderItemRow = ({ order }: { order: OrderItem }) => {
  return (
    <>
      <span className="overviewId">{order.id}</span>
      <span className="overviewDate">{order.date}</span>
      <span className="orderType">{order.type}</span>
      <span className="overviewIsin">{order.isin}</span>
      <span className="stockName">{order.name}</span>
      <span className="overviewAmount">{order.amount}</span>
      <span className="overviewAmount">{order.price}</span>
      <span className="overviewAmount">{order.cost}</span>
      <span className="overviewAmount">{order.sum}</span>
      <span className="overviewAccount">{order.from}</span>
      <span className="overviewAccount">{order.to}</span>
      <span>
        <LinkButton to={`/orders/${order.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default OrderItemRow;
