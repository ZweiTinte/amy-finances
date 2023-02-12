import * as React from "react";
import ErrorInfo from "../../level1/errorInfo";
import { fetchOrders } from "../../../api/ordersApi";
import StocksFetching from "./stocksFetching";

const OrdersFetching = ({ transactions }: { transactions: Transaction[] }) => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

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
          <StocksFetching transactions={transactions} orders={orders} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default OrdersFetching;
