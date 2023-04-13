import * as React from "react";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import { navigate } from "gatsby";
import DividendItem from "../../level1/dividendItem";

const Dividends = ({
  dividends,
  accounts,
  stocks,
}: {
  dividends: Dividend[];
  accounts: Account[];
  stocks: Stock[];
}) => {
  return (
    <div className="gameLayout">
      <div className="ordersCard">
        <div className="formRowDefault">
          <Headline text="Dividends Overview" style="transactionsHeadline" />
          <Button
            color={"addButton"}
            onClick={() => navigate("/dividends/new")}
            text={"Add New Dividend"}
          />
        </div>
        <div className="orderProps">
          <span className="transactionId">ID</span>
          <span className="transactionDate">Pay-Date</span>
          <span className="transactionDate">Ex-Date</span>
          <span className="stockIsin">ISIN</span>
          <span className="stockName">Name</span>
          <span className="orderAmountHeadline">Amount</span>
          <span className="orderPriceHeadline">Tax</span>
          <span className="orderSumHeadline">Sum</span>
          <span className="transactionTo">To</span>
        </div>
        {dividends.map((item, i) => {
          return (
            <div
              className={
                "orderInfos" +
                (i !== dividends.length - 1 ? " dottedBorder" : "")
              }
              key={item.id}
            >
              <DividendItem
                dividend={item}
                accounts={accounts}
                stocks={stocks}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dividends;
