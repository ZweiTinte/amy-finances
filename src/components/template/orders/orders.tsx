import * as React from "react";
import Headline from "../../atoms/headline";
import OrderItem from "../../level1/orderItem";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";

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
      {orders && accounts && stocks && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Orders Overview" style="cardHeadline" />
              <LinkButton to="/orders/new" title="add new order">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="overviewHead">
              <span className="overviewId">ID</span>
              <span className="overviewDate">Date</span>
              <span className="orderType">Type</span>
              <span className="overviewIsin">ISIN</span>
              <span className="stockName">Name</span>
              <span className="overviewAmountHeadline">Amount</span>
              <span className="overviewAmountHeadline">Price</span>
              <span className="overviewAmountHeadline">Order Cost</span>
              <span className="overviewAmountHeadline">Sum</span>
              <span className="overviewAccount">From</span>
              <span className="overviewAccount">To</span>
            </div>
            {orders.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
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
      )}
    </>
  );
};

export default Orders;
