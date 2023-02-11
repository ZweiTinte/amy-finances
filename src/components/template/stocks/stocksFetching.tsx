import * as React from "react";
import { fetchStocks } from "../../../api/stocksApi";
import ErrorInfo from "../../level1/errorInfo";
import Stocks from "./stocks";
import StocksSidebarRight from "./stocksSidebarRight";

const StocksFetching = ({ orders }: { orders: Order[] }) => {
  const [stocksReady, setStocksReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [stocks, setStocks] = React.useState<Stock[]>([]);
  const [filteredStocks, setFilteredStocks] = React.useState<Stock[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveStocksFetching(data: Stock[]): void {
    data = data.map((stock) => {
      orders.forEach((order) => {
        if (order.stock === stock.id && order.orderType === "Buy") {
          stock.amount += order.amount;
        } else if (order.stock === stock.id && order.orderType === "Sell") {
          stock.amount -= order.amount;
        }
      });
      return stock;
    });
    setStocks(data);
    setFilteredStocks(data);
    setStocksReady(true);
  }

  function loadStocks(): void {
    setStocksReady(false);
    fetchStocks(resolveStocksFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadStocks();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {stocksReady && (
        <>
          <Stocks
            stocks={filteredStocks.sort((a, b) => {
              return a.name.localeCompare(b.name);
            })}
          />
          <StocksSidebarRight
            stocks={stocks}
            setFilteredStocks={setFilteredStocks}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksFetching;
