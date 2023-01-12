import * as React from "react";
import { fetchTransaction } from "../../../transactionHelper";
import ErrorInfo from "../../level1/errorInfo";
import { DropdownItem } from "../../atoms/dropdown";
import { emptyAccountDDItem } from "../../../accountsHelper";
import { categories } from "../../../categoriesHelper";
import EditTransaction from "./editTransaction";

const EditTransactionFetching = ({
  id,
  accounts,
}: {
  id: string;
  accounts: DropdownItem[];
}) => {
  const transactionId = id;
  const [transactionReady, setTransactionReady] =
    React.useState<boolean>(false);
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

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Transaction): void {
    setName(data.name);
    setDate(data.date);
    setCategory(
      categories.filter((c) => {
        return c.value === data.category;
      })[0]
    );
    setAmount(data.amount.toString());
    setFrom(
      accounts.filter((a) => {
        return a.id === data.from;
      })[0]
    );
    setTo(
      accounts.filter((a) => {
        return a.id === data.to;
      })[0]
    );
    setTransactionReady(true);
  }

  function loadTransaction(): void {
    setTransactionReady(false);
    setError(false);
    setErrorMessage("");
    fetchTransaction(resolveFetching, handleError, transactionId);
  }

  React.useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <>
      {transactionReady && (
        <EditTransaction
          id={id}
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
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadTransaction} />}
    </>
  );
};

export default EditTransactionFetching;
