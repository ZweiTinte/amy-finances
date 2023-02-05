import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import Button from "../atoms/button";
import { navigate } from "gatsby";
import { getAccountName } from "../../helpers/accountsHelper";
import { getStocks } from "../../helpers/stocksHelper";

interface OrderProps {
  stock: Stock;
}

const StockItem = ({ stock }: OrderProps) => {
  return (
    <>
      <span className="stockIsin">{stock.isin}</span>
      <span className="stockName">{stock.name}</span>
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
