import * as React from "react";
import { emptyAccountDDItem } from "../../helpers/accountsHelper";
import ErrorInfo from "../../components/level1/errorInfo";
import EditTransactionFetching from "../../components/template/transactions/editTransactionFetching";
import { fetchAccounts } from "../../api/accountsApi";
import { DropdownItem } from "../../dropdownTypes";
import CategoriesFetching from "../../components/template/categoriesFetching";

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
      {accountsReady && (
        <CategoriesFetching accountsDropdown={accounts}>
          <EditTransactionFetching id={params.id} />
        </CategoriesFetching>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default TransactionEditPage;
