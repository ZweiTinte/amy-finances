import * as React from "react";
import { euroFormat } from "../../helpers";
import Button from "../atoms/button";
import { navigate } from "gatsby";
import { getAccountName } from "../../accountsHelper";
import { getStocks } from "../../stocksHelper";

interface OrderProps {
  order: Order;
  accounts: Account[];
  stocks: Stock[];
}

const OrderItem = ({ order, accounts, stocks }: OrderProps) => {
  const stock: Stock = getStocks(order.stock, stocks)[0];
  return (
    <>
      <span className="transactionId">{order.id!.toString()}</span>
      <span className="transactionDate">{order.date}</span>
      <span className="orderType">{order.orderType}</span>
      <span className="stockIsin">{stock?.isin}</span>
      <span className="stockName">{stock?.name}</span>
      <span className="orderAmount">{order.amount}</span>
      <span className="orderPrice">{euroFormat.format(order.price)}</span>
      <span className="orderCost">{euroFormat.format(order.cost)}</span>
      <span className="orderSum">{euroFormat.format(order.sum)}</span>
      <span className="transactionFrom">
        {getAccountName(order.from, accounts)}
      </span>
      <span className="transactionTo">
        {getAccountName(order.to, accounts)}
      </span>
      <span>
        <Button
          color={"editButton"}
          onClick={() => navigate(`/orders/${order.id}`)}
          text={"Edit"}
        />
      </span>
    </>
  );
};

export default OrderItem;
