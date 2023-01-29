import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { fetchAccounts } from "../../../accountsApi";
import ErrorInfo from "../../level1/errorInfo";
import { emptyAccountDDItem } from "../../../accountsHelper";
import NewOrder from "./newOrder";

const AccountsFetching = ({ stocks }: { stocks: DropdownItem[] }) => {
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
      [emptyAccountDDItem].concat(
        data.map((account) => {
          return { id: account.id, value: account.name };
        })
      )
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
          <NewOrder accounts={accounts} stocks={stocks} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsFetching;
