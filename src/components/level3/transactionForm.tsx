import * as React from "react";
import { TransactionFormProps } from "../../transactionTypes";
import EditFormSubmit from "../level1/editFormSubmit";
import { fieldsValid, formValidationMessage } from "../../helpers/helpers";
import TransactionFormInputs from "../level2/transactionFormInputs";

const TransactionForm = ({
  submitHandler,
  date,
  setDate,
  name,
  setName,
  category,
  setCategory,
  amount,
  setAmount,
  from,
  setFrom,
  accounts,
  to,
  setTo,
  deleteSelectedTransaction,
  transactionType,
  setTransactionType,
  recurringEnd,
  setRecurringGap,
  recurringGap,
  recurringPeriod,
  setRecurringEnd,
  setRecurringPeriod,
}: TransactionFormProps) => {
  const [error, setError] = React.useState<string>("");

  return (
    <form>
      <TransactionFormInputs
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
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedTransaction}
        submitHandler={(e) => {
          if (
            fieldsValid([date, name, amount]) &&
            (transactionType.value === "Recurring"
              ? fieldsValid([recurringGap])
              : true)
          ) {
            submitHandler(e);
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Transaction"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default TransactionForm;
