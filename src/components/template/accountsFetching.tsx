import * as React from "react";
import ErrorInfo from "../level1/errorInfo";
import { fetchAccounts } from "../../api/accountsApi";
import { emptyAccountDDItem } from "../../helpers/accountsHelper";

const AccountsFetching = ({
  children,
  transactions,
  orders,
  stocks,
}: {
  children: JSX.Element;
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
}) => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [accounts, setAccounts] = React.useState<Account[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveAccountsFetching(data: Account[]): void {
    setAccounts(data);
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
          {React.cloneElement(children, {
            transactions: transactions,
            orders: orders,
            stocks: stocks,
            accounts: accounts,
            accountsDropdown: [emptyAccountDDItem].concat(
              accounts.map((account) => {
                return { id: account.id, value: account.name };
              })
            ),
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsFetching;
