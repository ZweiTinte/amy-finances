import * as React from "react";
import { fetchTransactions } from "../../api/transactionApi";
import ErrorInfo from "../level1/errorInfo";
import { getRecurringTransactions } from "../../helpers/transactionsHelper";
import { DropdownItem } from "../../dropdownTypes";

const TransactionFetching = ({
  children,
  accounts,
  categories,
  accountsDropdown,
}: {
  children: JSX.Element;
  accounts?: Account[];
  categories?: Category[];
  accountsDropdown?: DropdownItem[];
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
    let recurringTransactions: Transaction[] = [];
    data.forEach((d) => {
      if (d.recurringEnd && d.recurringGap && d.recurringPeriod) {
        recurringTransactions = recurringTransactions.concat(
          getRecurringTransactions(d)
        );
      }
    });
    setTransactions(data.concat(recurringTransactions));
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
            categories: categories,
            accountsDropdown: accountsDropdown,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default TransactionFetching;
