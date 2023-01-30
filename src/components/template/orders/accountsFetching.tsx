import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { fetchAccounts } from "../../../accountsApi";
import ErrorInfo from "../../level1/errorInfo";
import NewOrder from "./newOrder";
import EditOrderFetching from "./editOrderFetching";

const AccountsFetching = ({ stocks, id }: { stocks: Stock[]; id?: string }) => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [accounts, setAccounts] = React.useState<DropdownItem[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveAccountsFetching(data: Account[]): void {
    setAccounts(
      data.map((account) => {
        return { id: account.id, value: account.name };
      })
    );
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
          {id ? (
            <EditOrderFetching accounts={accounts} stocks={stocks} id={id} />
          ) : (
            <NewOrder accounts={accounts} stocks={stocks} />
          )}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsFetching;
