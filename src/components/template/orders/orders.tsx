import * as React from "react";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import { navigate } from "gatsby";
import OrderItem from "../../level1/orderItem";

const Orders = ({
  orders,
  accounts,
  stocks,
}: {
  orders: Order[];
  accounts: Account[];
  stocks: Stock[];
}) => {
  return (
    <>
      <div className="gameLayout">
        <div className="ordersCard">
          <div className="formRowDefault">
            <Headline text="Orders Overview" style="transactionsHeadline" />
            <Button
              color={"addButton"}
              onClick={() => navigate("/orders/new")}
              text={"Add New Order"}
            />
          </div>
          <div className="orderProps">
            <span className="transactionId">ID</span>
            <span className="transactionDate">Date</span>
            <span className="orderType">Type</span>
            <span className="stockIsin">ISIN</span>
            <span className="stockName">Name</span>
            <span className="orderAmountHeadline">Amount</span>
            <span className="orderPriceHeadline">Price</span>
            <span className="orderCostHeadline">Order Cost</span>
            <span className="orderSumHeadline">Sum</span>
            <span className="transactionFrom">From</span>
            <span className="transactionTo">To</span>
          </div>
          {orders.map((item, i) => {
            return (
              <div
                className={
                  "orderInfos" +
                  (i !== orders.length - 1 ? " dottedBorder" : "")
                }
                key={item.id}
              >
                <OrderItem order={item} accounts={accounts} stocks={stocks} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
