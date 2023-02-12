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
          </div>
          {stocks.map((item) => {
            return (
              <div className="stockInfos" key={item.id}>
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
