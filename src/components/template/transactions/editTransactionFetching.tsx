import * as React from "react";
import { fetchTransaction } from "../../../api/transactionApi";
import ErrorInfo from "../../level1/errorInfo";
import { emptyAccountDDItem } from "../../../helpers/accountsHelper";
import EditTransaction from "./editTransaction";
import { recPeriods, transTypes } from "../../../helpers/transactionConsts";
import { DropdownItem } from "../../../dropdownTypes";
import { EditTransactionFetchingProps } from "../../../transactionTypes";
import { getCategory } from "../../../helpers/transactionsHelper";

const EditTransactionFetching = ({
  id,
  accountsDropdown,
  categoriesDropdown,
}: EditTransactionFetchingProps) => {
  const [transactionReady, setTransactionReady] =
    React.useState<boolean>(false);
  const [date, setDate] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>(
    getCategory(categoriesDropdown)
  );
  const [transType, setTransType] = React.useState<DropdownItem>(transTypes[0]);
  const [amount, setAmount] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [to, setTo] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [recurringEnd, setRecurringEnd] = React.useState<string>("");
  const [recPeriod, setRecPeriod] = React.useState<DropdownItem>(recPeriods[0]);
  const [recurringGap, setRecurringGap] = React.useState<string>("0");

  function loadTransaction(): void {
    setTransactionReady(false);
    setError(false);
    setErrorMessage("");
    fetchTransaction(
      accountsDropdown || [],
      setName,
      setDate,
      setTransType,
      setCategory,
      setAmount,
      setFrom,
      setTo,
      setRecurringEnd,
      setRecurringGap,
      setRecPeriod,
      setTransactionReady,
      setError,
      setErrorMessage,
      id,
      categoriesDropdown || []
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
          to={to}
          setTo={setTo}
          transactionType={transType}
          setTransactionType={setTransType}
          recurringEnd={recurringEnd}
          setRecurringGap={setRecurringGap}
          recurringGap={recurringGap}
          recurringPeriod={recPeriod}
          setRecurringEnd={setRecurringEnd}
          setRecurringPeriod={setRecPeriod}
        />
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadTransaction} />}
    </>
  );
};

export default EditTransactionFetching;
