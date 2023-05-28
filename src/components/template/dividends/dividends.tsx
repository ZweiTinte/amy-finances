import * as React from "react";
import Headline from "../../atoms/headline";
import DividendItem from "../../level1/dividendItem";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";

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
    <>
      {dividends && accounts && stocks && (
        <div className="gameLayout">
          <div className="ordersCard">
            <div className="formRowDefault">
              <Headline
                text="Dividends Overview"
                style="transactionsHeadline"
              />
              <LinkButton to="/dividends/new" title="add new dividend">
                <PlusIcon className="heroIcon" />
              </LinkButton>
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
      )}
    </>
  );
};

export default Dividends;
