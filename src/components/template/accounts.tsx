import * as React from "react";
import { euroFormat } from "../../helpers";
import AccountItem from "../atoms/accountItem";
import Headline from "../atoms/headline";
import ErrorInfo from "../level1/errorInfo";

const Accounts = () => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [totalBalance, setTotalBalance] = React.useState<number>(0);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Account[]): void {
    setAccounts(data);
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
        <div className="gameLayout">
          <div className="accountsCard">
            <Headline text="Accounts Overview" style="accountsHeadline" />
            <div className="accountProps">
              <span className="accountIban">IBAN</span>
              <span className="accountName">Name</span>
              <span className="accountBalance">Balance</span>
            </div>
            {accounts.map((item) => {
              return (
                <div className="accountInfos" key={item.id}>
                  <AccountItem account={item} />
                </div>
              );
            })}
            <div className="accountsSummary">
              <span className="accountsSum">Total Balance:</span>
              <span className="accountBalance">
                {euroFormat.format(totalBalance)}
              </span>
            </div>
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default Accounts;
