import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import Button from "../atoms/button";
import { navigate } from "gatsby";
import { getAccountName } from "../../helpers/accountsHelper";
import { getStocks } from "../../helpers/stocksHelper";

interface DividendProps {
  dividend: Dividend;
  accounts: Account[];
  stocks: Stock[];
}

const DividendItem = ({ dividend, accounts, stocks }: DividendProps) => {
  const stock: Stock = getStocks(dividend.stock, stocks)[0];
  return (
    <>
      <span className="transactionId">{dividend.id!.toString()}</span>
      <span className="transactionDate">{dividend.payDate}</span>
      <span className="transactionDate">{dividend.exDate}</span>
      <span className="stockIsin">{stock?.isin}</span>
      <span className="stockName">{stock?.name}</span>
      <span className="orderAmount">
        {euroFormat.format(dividend.amountBeforeTax)}
      </span>
      <span className="orderPrice">
        {euroFormat.format(dividend.taxAmount)}
      </span>
      <span className="orderSum">
        {euroFormat.format(dividend.amountBeforeTax - dividend.taxAmount)}
      </span>
      <span className="transactionTo">
        {getAccountName(dividend.toAccount, accounts)}
      </span>
      <span>
        <Button
          color={"editButton"}
          onClick={() => navigate(`/dividends/${dividend.id}`)}
          text={"Edit"}
        />
      </span>
    </>
  );
};

export default DividendItem;
