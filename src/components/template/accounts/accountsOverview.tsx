import * as React from "react";
import Accounts from "./accounts";
import AccountSidebarRight from "./accountSidebarRight";
import ErrorInfo from "../../level1/errorInfo";
import { calculateAccountBalance } from "../../../helpers/accountBalanceCalculation";

const AccountsOverview = ({
  transactions,
  orders,
  stocks,
  accounts,
  dividends,
}: {
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
  accounts?: Account[];
  dividends?: Dividend[];
}) => {
  const [accountsReady, setAccountsReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [calculatedAccounts, setCalculatedAccounts] = React.useState<Account[]>(
    []
  );
  const [filteredAccounts, setFilteredAccounts] = React.useState<Account[]>([]);
  const [totalBalance, setTotalBalance] = React.useState<number>(0);
  const [filtered, setFiltered] = React.useState<boolean>(false);

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
    if (transactions && orders && stocks && accounts && dividends) {
      setCalculatedAccounts(
        calculateAccountBalance(
          accounts,
          stocks,
          orders,
          transactions,
          dividends
        )
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
      setErrorMessage("Some data wasn't passed to this component!");
    }
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {accountsReady && (
        <>
          {filtered && (
            <Accounts accounts={filteredAccounts} totalBalance={totalBalance} />
          )}
          <AccountSidebarRight
            accounts={calculatedAccounts}
            setFilteredAccounts={setFilteredAccounts}
            setFiltered={setFiltered}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default AccountsOverview;
