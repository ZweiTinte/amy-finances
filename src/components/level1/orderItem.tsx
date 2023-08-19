import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import { getAccountName } from "../../helpers/accountsHelper";
import { getStocks } from "../../helpers/stocksHelper";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface OrderProps {
  order: Order;
  accounts: Account[];
  stocks: Stock[];
}

const OrderItem = ({ order, accounts, stocks }: OrderProps) => {
  const stock: Stock = getStocks(order.stock, stocks)[0];
  return (
    <>
      <span className="overviewId">{order.id!.toString()}</span>
      <span className="overviewDate">{order.date}</span>
      <span className="orderType">{order.orderType}</span>
      <span className="overviewIsin">{stock?.isin}</span>
      <span className="stockName">{stock?.name}</span>
      <span className="overviewAmount">{order.amount}</span>
      <span className="overviewAmount">{euroFormat.format(order.price)}</span>
      <span className="overviewAmount">{euroFormat.format(order.cost)}</span>
      <span className="overviewAmount">{euroFormat.format(order.sum)}</span>
      <span className="overviewAccount">
        {getAccountName(order.from, accounts)}
      </span>
      <span className="overviewAccount">
        {getAccountName(order.to, accounts)}
      </span>
      <span>
        <LinkButton to={`/orders/${order.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default OrderItem;
