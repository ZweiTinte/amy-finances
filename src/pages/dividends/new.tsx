import * as React from "react";
import StocksFetching from "../../components/template/stocksFetching";
import AccountsFetching from "../../components/template/accountsFetching";
import DividendForms from "../../components/template/dividends/dividendForms";

const DividendsPage = () => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <DividendForms />
      </StocksFetching>
    </AccountsFetching>
  );
};

export default DividendsPage;
