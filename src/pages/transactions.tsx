import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import Transactions from "../components/template/transactions/transactions";
import TransactionSidebarRight from "../components/template/transactions/transactionSidebarRight";

const TransactionsPage = () => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [transactionsReady, setTransactionsReady] =
    React.useState<boolean>(false);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState<
    Transaction[]
  >([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [accounts, setAccounts] = React.useState<Account[]>([]);

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

  function resolveAccountsFetching(data: Account[]): void {
    setAccounts(data);
    setAccountsReady(true);
  }

  function loadAccounts(): void {
    setAccountsReady(false);
    async function fetchAccounts(
      resolveFetching: (data: Account[]) => void,
      handleError: (error: Error) => void
    ): Promise<void> {
      await fetch("http://localhost:3000/api/accounts")
        .then(async (res) => {
          await res.json().then(resolveFetching).catch(handleError);
        })
        .catch(handleError);
    }
    fetchAccounts(resolveAccountsFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadAccounts();
    loadTransactions();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {accountsReady && transactionsReady && (
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

export default TransactionsPage;
