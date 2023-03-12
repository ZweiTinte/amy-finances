import * as React from "react";
import { fetchTransaction } from "../../../api/transactionApi";
import ErrorInfo from "../../level1/errorInfo";
import { DropdownItem } from "../../atoms/dropdown";
import { emptyAccountDDItem } from "../../../helpers/accountsHelper";
import EditTransaction from "./editTransaction";
import {
  categories,
  recurringPeriods,
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
  const [recurringEnd, setRecurringEnd] = React.useState<string>("");
  const [recurringPeriod, setRecurringPeriod] = React.useState<DropdownItem>(
    recurringPeriods[0]
  );
  const [recurringGap, setRecurringGap] = React.useState<string>("");

  function loadTransaction(): void {
    setTransactionReady(false);
    setError(false);
    setErrorMessage("");
    fetchTransaction(
      accounts,
      setName,
      setDate,
      setTransactionType,
      setCategory,
      setAmount,
      setFrom,
      setTo,
      setRecurringEnd,
      setRecurringGap,
      setRecurringPeriod,
      setTransactionReady,
      setError,
      setErrorMessage,
      id
    );
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
          recurringEnd={recurringEnd}
          setRecurringGap={setRecurringGap}
          recurringGap={recurringGap}
          recurringPeriod={recurringPeriod}
          setRecurringEnd={setRecurringEnd}
          setRecurringPeriod={setRecurringPeriod}
        />
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadTransaction} />}
    </>
  );
};

export default EditTransactionFetching;
