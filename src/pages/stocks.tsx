import * as React from "react";
import OrdersFetching from "../components/template/ordersFetching";
import StocksOverview from "../components/template/stocks/stocksOverview";
import StocksFetching from "../components/template/stocksFetching";

const StocksPage = () => {
  return (
    <OrdersFetching>
      <StocksFetching>
        <StocksOverview />
      </StocksFetching>
    </OrdersFetching>
  );
};

export default StocksPage;
