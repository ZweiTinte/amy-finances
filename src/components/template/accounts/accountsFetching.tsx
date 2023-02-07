import * as React from "react";
import Accounts from "./accounts";
import AccountSidebarRight from "./accountSidebarRight";
import ErrorInfo from "../../level1/errorInfo";
import { fetchAccounts } from "../../../api/accountsApi";

const AccountsFetching = ({
  transactions,
  orders,
}: {
  transactions: Transaction[];
  orders: Order[];
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
      orders.forEach((order) => {
        if (order.from === account.id && account.accountType === "Clearing") {
          account.balance -= order.sum;
        } else if (
          order.to === account.id &&
          account.accountType === "Clearing"
        ) {
          account.balance += order.sum;
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
    fetchAccounts(resolveAccountsFetching, handleError);
  }

  React.useEffect(() => {
    let total = 0;
    filteredAccounts.forEach((account) => {
      total += account.balance;
    });
    setTotalBalance(total);
  }, [filteredAccounts]);

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
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsFetching;
