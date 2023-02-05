import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import { fetchStocks } from "../api/stocksApi";
import Stocks from "../components/template/stocks/stocks";

const StocksPage = () => {
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
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksPage;
