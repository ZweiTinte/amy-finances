import * as React from "react";
import Button from "../atoms/button";
import { navigate } from "gatsby";

interface OrderProps {
  stock: Stock;
}

const StockItem = ({ stock }: OrderProps) => {
  return (
    <>
      <span className="stockIsin">{stock.isin}</span>
      <span className="stockName">{stock.name}</span>
      <span className="orderAmount">{stock.amount}</span>
      <span>
        <Button
          color={"editButton"}
          onClick={() => navigate(`/stocks/${stock.id}`)}
          text={"Edit"}
        />
      </span>
    </>
  );
};

export default StockItem;
