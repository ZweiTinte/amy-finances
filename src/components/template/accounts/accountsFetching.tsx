import * as React from "react";
import Accounts from "./accounts";
import AccountSidebarRight from "./accountSidebarRight";
import ErrorInfo from "../../level1/errorInfo";

const AccountsFetching = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [filteredAccounts, setFilteredAccounts] = React.useState<Account[]>([]);
  const [totalBalance, setTotalBalance] = React.useState<number>(0);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveAccountsFetching(data: Account[]): void {
    data = data.map((account) => {
      transactions.forEach((trans) => {
        if (trans.from === account.id) {
          account.balance -= trans.amount;
        } else if (trans.to === account.id) {
          account.balance += trans.amount;
        }
      });
      return account;
    });
    setAccounts(data);
    setFilteredAccounts(data);
    let total = 0;
    data.forEach((account) => {
      total += account.balance;
    });
    setTotalBalance(total);
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
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {accountsReady && (
        <>
          <Accounts accounts={filteredAccounts} totalBalance={totalBalance} />
          <AccountSidebarRight
            accounts={accounts}
            setFilteredAccounts={setFilteredAccounts}
            filteredAccountsData={filteredAccounts}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsFetching;
