import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import StocksFetching from "../components/template/stocks/stocksFetching";
import { fetchOrders } from "../api/ordersApi";

const StocksPage = () => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [orders, setOrders] = React.useState<Order[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Order[]): void {
    setOrders(data);
    setTemplateReady(true);
  }

  function loadOrders(): void {
    setTemplateReady(false);
    fetchOrders(resolveFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadOrders();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {templateReady && (
        <>
          <StocksFetching orders={orders} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksPage;
