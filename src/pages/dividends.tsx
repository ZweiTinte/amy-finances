import * as React from "react";
import StocksFetching from "../components/template/stocksFetching";
import DividendsFetching from "../components/template/dividendsFetching";
import AccountsFetching from "../components/template/accountsFetching";
import DividendsOverview from "../components/template/dividends/dividendsOverview";

const DividendsPage = () => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <DividendsFetching>
          <DividendsOverview />
        </DividendsFetching>
      </StocksFetching>
    </AccountsFetching>
  );
};

export default DividendsPage;
