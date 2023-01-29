import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { DropdownItem } from "../../atoms/dropdown";
import { postTransaction } from "../../../transactionHelper";
import ErrorInfo from "../../level1/errorInfo";
import { emptyAccountDDItem } from "../../../accountsHelper";
import TransactionForm from "../../level2/transactionForm";
import { fetchAccounts } from "../../../accountsApi";

const NewTransaction = () => {
  const [date, setDate] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>({
    id: 2,
    value: "Food",
  });
  const [amount, setAmount] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [to, setTo] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<DropdownItem[]>([]);

  function resolvePost(): void {
    navigate("/transactions");
  }

  function addNewTransaction(): void {
    postTransaction(resolvePost, date, name, category, amount, from, to);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewTransaction();
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Account[]): void {
    const accountsData = [emptyAccountDDItem].concat(
      data.map((account) => {
        return { id: account.id, value: account.name };
      })
    );
    setAccounts(accountsData);
    setTemplateReady(true);
  }

  function loadAccounts(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchAccounts(resolveFetching, handleError);
  }

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="transactionsCard">
            <Headline
              text="Add a new transaction"
              style="transactionsHeadline"
            />
            <TransactionForm
              submitHandler={submitHandler}
              date={date}
              setDate={setDate}
              name={name}
              setName={setName}
              category={category}
              setCategory={setCategory}
              amount={amount}
              setAmount={setAmount}
              from={from}
              setFrom={setFrom}
              accounts={accounts}
              to={to}
              setTo={setTo}
            />
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default NewTransaction;
