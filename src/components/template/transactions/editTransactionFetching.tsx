import * as React from "react";
import { fetchTransaction } from "../../../api/transactionApi";
import ErrorInfo from "../../level1/errorInfo";
import { DropdownItem } from "../../atoms/dropdown";
import { emptyAccountDDItem } from "../../../helpers/accountsHelper";
import EditTransaction from "./editTransaction";
import {
  categories,
  getCategory,
  getTransactionType,
  transactionTypes,
} from "../../../helpers/transactionsHelper";

const EditTransactionFetching = ({
  id,
  accounts,
}: {
  id: string;
  accounts: DropdownItem[];
}) => {
  const [transactionReady, setTransactionReady] =
    React.useState<boolean>(false);
  const [date, setDate] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>(categories[0]);
  const [transactionType, setTransactionType] = React.useState<DropdownItem>(
    transactionTypes[0]
  );
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
    setTransactionType(getTransactionType(data.transactionType));
    setCategory(getCategory(data.category));
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
    fetchTransaction(resolveFetching, handleError, id);
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
          transactionType={transactionType}
          setTransactionType={setTransactionType}
        />
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadTransaction} />}
    </>
  );
};

export default EditTransactionFetching;
