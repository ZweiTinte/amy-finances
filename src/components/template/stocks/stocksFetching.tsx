import * as React from "react";
import ErrorInfo from "../../level1/errorInfo";
import OrdersFetching from "../orders/ordersFetching";
import { fetchStocks } from "../../../stocksHelper";

const StocksFetching = ({ accounts }: { accounts: Account[] }) => {
  const [stocksReady, setStocksReady] = React.useState<boolean>(false);
  const [stocks, setStocks] = React.useState<Stock[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Stock[]): void {
    setStocks(data);
    setStocksReady(true);
  }

  function loadStocks(): void {
    setStocksReady(false);
    fetchStocks(resolveFetching, handleError);
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
          <OrdersFetching stocks={stocks} accounts={accounts} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksFetching;
