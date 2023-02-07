import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import OrdersFetching from "../components/template/accounts/ordersFetching";
import { fetchTransactions } from "../api/transactionApi";

const AccountsPage = () => {
  const [transactionsReady, setTransactionsReady] =
    React.useState<boolean>(false);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Transaction[]): void {
    setTransactions(data);
    setTransactionsReady(true);
  }

  function loadTransactions(): void {
    setTransactionsReady(false);
    fetchTransactions(resolveFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadTransactions();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {transactionsReady && (
        <>
          <OrdersFetching transactions={transactions} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsPage;
