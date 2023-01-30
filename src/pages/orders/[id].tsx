import * as React from "react";
import NewOrder from "../../components/template/orders/newOrder";
import { fetchStocks } from "../../stocksHelper";
import ErrorInfo from "../../components/level1/errorInfo";
import AccountsFetching from "../../components/template/orders/accountsFetching";

const OrdersPage = ({ params }: { params: { id: string } }) => {
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
          <AccountsFetching stocks={stocks} id={params.id} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default OrdersPage;
