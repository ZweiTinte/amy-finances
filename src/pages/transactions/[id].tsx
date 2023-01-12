import * as React from "react";
import EditTransaction from "../../components/template/editTransaction";
import { emptyAccountDDItem, fetchAccounts } from "../../accountsHelper";
import { DropdownItem } from "../../components/atoms/dropdown";
import ErrorInfo from "../../components/level1/errorInfo";

const TransactionEditPage = ({ params }: { params: { id: string } }) => {
  const [accounts, setAccounts] = React.useState<DropdownItem[]>([]);
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetchingAccounts(data: Account[]): void {
    const accountsData = [emptyAccountDDItem].concat(
      data.map((account) => {
        return { id: account.id, value: account.name };
      })
    );
    setAccounts(accountsData);
    setAccountsReady(true);
  }

  function loadAccounts(): void {
    setAccountsReady(false);
    setError(false);
    setErrorMessage("");
    fetchAccounts(resolveFetchingAccounts, handleError);
  }

  React.useEffect(() => {
    loadAccounts();
  }, []);
  return (
    <>
      {accountsReady && <EditTransaction id={params.id} accounts={accounts} />}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default TransactionEditPage;
