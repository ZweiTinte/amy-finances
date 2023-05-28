import * as React from "react";
import Headline from "../../atoms/headline";
import StockItem from "../../level1/stockItem";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";

const Stocks = ({ stocks }: { stocks: Stock[] }) => {
  return (
    <>
      {stocks && (
        <div className="gameLayout">
          <div className="stocksCard">
            <div className="formRowDefault">
              <Headline text="Stocks Overview" style="transactionsHeadline" />
              <LinkButton to="/stocks/new" title="add new stock">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="stockProps">
              <span className="stockIsin">ISIN</span>
              <span className="stockName">Name</span>
              <span className="orderAmount">Amount</span>
              <span className="orderPriceHeadline">Price</span>
              <span className="orderSumHeadline">Sum</span>
            </div>
            {stocks.map((item, i) => {
              return (
                <div
                  className={
                    "stockInfos" +
                    (i !== stocks.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <StockItem stock={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Stocks;
