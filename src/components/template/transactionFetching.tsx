import * as React from "react";
import { fetchTransactions } from "../../api/transactionApi";
import ErrorInfo from "../level1/errorInfo";

const TransactionFetching = ({
  children,
  accounts,
}: {
  children: JSX.Element;
  accounts?: Account[];
}) => {
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
          {React.cloneElement(children, {
            transactions: transactions,
            accounts: accounts,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default TransactionFetching;
