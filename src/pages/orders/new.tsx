import * as React from "react";
import { fetchStocks } from "../../api/stocksApi";
import ErrorInfo from "../../components/level1/errorInfo";
import AccountsFetching from "../../components/template/orders/accountsFetching";

const OrdersPage = () => {
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
          <AccountsFetching stocks={stocks} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default OrdersPage;
