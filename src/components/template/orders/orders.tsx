import * as React from "react";
import Headline from "../../atoms/headline";
import OrderItemRow from "../../level1/orderItemRow";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";
import { getOrderItems, orderItemFields } from "../../../helpers/ordersHelper";
import { download } from "../../../helpers/downloadService";
import Button from "../../atoms/button";

const Orders = ({
  orders,
  accounts,
  stocks,
}: {
  orders: Order[];
  accounts: Account[];
  stocks: Stock[];
}) => {
  const orderItems = getOrderItems(orders, accounts, stocks);
  return (
    <>
      {orders && accounts && stocks && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Orders Overview" style="cardHeadline" />
              <div className="inlineRow">
                <Button
                  onClick={() =>
                    download("orders", orderItemFields, orderItems)
                  }
                  text="Download"
                  color={"downloadButton"}
                />
                <LinkButton
                  to="/orders/new"
                  title="add new order"
                  classes="addLink"
                >
                  <PlusIcon className="heroIcon" />
                </LinkButton>
              </div>
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
            {orderItems.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== orders.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <OrderItemRow order={item} />
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
