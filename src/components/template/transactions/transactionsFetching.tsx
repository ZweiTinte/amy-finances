import * as React from "react";
import { fetchTransactions } from "../../../transactionHelper";
import ErrorInfo from "../../level1/errorInfo";
import TransactionSidebarRight from "./transactionSidebarRight";
import Transactions from "./transactions";

const TransactionsFetching = ({ accounts }: { accounts: Account[] }) => {
  const [transactionsReady, setTransactionsReady] =
    React.useState<boolean>(false);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState<
    Transaction[]
  >([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Transaction[]): void {
    setTransactions(data);
    setFilteredTransactions(data);
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
          <Transactions
            transactions={filteredTransactions.sort((a, b) => {
              return Date.parse(a.date) - Date.parse(b.date);
            })}
            accounts={accounts}
          />
          <TransactionSidebarRight
            transactions={transactions}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredTransactions={setFilteredTransactions}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default TransactionsFetching;
