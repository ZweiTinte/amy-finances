import * as React from "react";
import ErrorInfo from "../../level1/errorInfo";
import Orders from "./orders";
import { fetchOrders } from "../../../ordersApi";

const OrdersFetching = ({
  accounts,
  stocks,
}: {
  accounts: Account[];
  stocks: Stock[];
}) => {
  const [ordersReady, setOrdersReady] = React.useState<boolean>(false);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = React.useState<Order[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Order[]): void {
    setOrders(data);
    setFilteredOrders(data);
    setOrdersReady(true);
  }

  function loadOrders(): void {
    setOrdersReady(false);
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
      {ordersReady && (
        <>
          <Orders
            orders={filteredOrders.sort((a, b) => {
              return Date.parse(a.date) - Date.parse(b.date);
            })}
            accounts={accounts}
            stocks={stocks}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default OrdersFetching;
