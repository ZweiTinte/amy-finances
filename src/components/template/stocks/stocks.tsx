import * as React from "react";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import { navigate } from "gatsby";
import StockItem from "../../level1/stockItem";

const Stocks = ({ stocks }: { stocks: Stock[] }) => {
  return (
    <>
      <div className="gameLayout">
        <div className="stocksCard">
          <div className="formRowDefault">
            <Headline text="Stocks Overview" style="transactionsHeadline" />
            <Button
              color={"addButton"}
              onClick={() => navigate("/stocks/new")}
              text={"Add New Stock"}
            />
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
    </>
  );
};

export default Stocks;
