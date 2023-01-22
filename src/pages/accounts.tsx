import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import AccountsFetching from "../components/template/accounts/accountsFetching";

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
    async function fetchTransactions(
      resolveFetching: (data: Transaction[]) => void,
      handleError: (error: Error) => void
    ): Promise<void> {
      await fetch("http://localhost:3000/api/transactions")
        .then(async (res) => {
          await res.json().then(resolveFetching).catch(handleError);
        })
        .catch(handleError);
    }
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
          <AccountsFetching transactions={transactions} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsPage;
