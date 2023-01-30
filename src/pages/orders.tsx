import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import { fetchAccounts } from "../accountsApi";
import StocksFetching from "../components/template/orders/stocksFetching";

const OrdersPage = () => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [accounts, setAccounts] = React.useState<Account[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveAccountsFetching(data: Account[]): void {
    setAccounts(data);
    setAccountsReady(true);
  }

  function loadAccounts(): void {
    setAccountsReady(false);
    fetchAccounts(resolveAccountsFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadAccounts();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {accountsReady && (
        <>
          <StocksFetching accounts={accounts} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default OrdersPage;
