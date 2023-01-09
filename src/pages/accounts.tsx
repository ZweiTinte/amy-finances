import * as React from "react";
import ErrorInfo from "../components/level1/errorInfo";
import Accounts from "../components/template/accounts";
import AccountSidebarRight from "../components/template/accountSidebarRight";

const AccountsPage = () => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [filteredAccounts, setFilteredAccounts] = React.useState<Account[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [totalBalance, setTotalBalance] = React.useState<number>(0);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Account[]): void {
    setAccounts(data);
    setFilteredAccounts(data);
    let total = 0;
    data.forEach((account) => {
      total += account.balance;
    });
    setTotalBalance(total);
    setTemplateReady(true);
  }

  function loadAccounts(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
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
    fetchAccounts(resolveFetching, handleError);
  }

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <>
      {templateReady && (
        <>
          <Accounts accounts={filteredAccounts} totalBalance={totalBalance} />
          <AccountSidebarRight
            accounts={accounts}
            setFilteredAccounts={setFilteredAccounts}
            filteredAccountsData={filteredAccounts}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default AccountsPage;
