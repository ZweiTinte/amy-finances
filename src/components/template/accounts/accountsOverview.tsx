import * as React from "react";
import Accounts from "./accounts";
import AccountSidebarRight from "./accountSidebarRight";
import ErrorInfo from "../../level1/errorInfo";
import { calculateAccountBalance } from "../../../helpers/accountsHelper";

const AccountsOverview = ({
  transactions,
  orders,
  stocks,
  accounts,
}: {
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
  accounts?: Account[];
}) => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [calculatedAccounts, setCalculatedAccounts] = React.useState<Account[]>(
    []
  );
  const [filteredAccounts, setFilteredAccounts] = React.useState<Account[]>([]);
  const [totalBalance, setTotalBalance] = React.useState<number>(0);

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
    if (transactions && orders && stocks && accounts) {
      setCalculatedAccounts(
        calculateAccountBalance(accounts, stocks, orders, transactions)
      );
      setFilteredAccounts(calculatedAccounts);
      let total = 0;
      calculatedAccounts.forEach((account) => {
        total += account.balance;
      });
      setTotalBalance(total);
      setAccountsReady(true);
    } else {
      setError(true);
      setErrorMessage(
        "Transactions, Orders or Stocks weren't passed to this component!"
      );
    }
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
            accounts={calculatedAccounts}
            setFilteredAccounts={setFilteredAccounts}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsOverview;
