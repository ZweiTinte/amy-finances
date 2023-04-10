import * as React from "react";
import NumberInput from "../atoms/numberInput";
import TextInput from "../atoms/textInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import { TransactionFormProps } from "../../transactionTypes";
import EditFormSubmit from "../level1/editFormSubmit";
import { categories, transactionTypes } from "../../helpers/transactionConsts";
import RecurringForm from "../level1/recurringForm";
import FromToForm from "../level1/fromToForm";

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
  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Type:</label>
        <Dropdown
          dropDownItem={transactionType}
          setDropdownItem={setTransactionType}
          dropDownData={transactionTypes}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">Date:</label>
        <DateInput value={date} setValue={setDate} />
      </div>
      {transactionType.value === "Recurring" && (
        <RecurringForm
          recurringEnd={recurringEnd}
          setRecurringGap={setRecurringGap}
          recurringGap={recurringGap}
          recurringPeriod={recurringPeriod}
          setRecurringEnd={setRecurringEnd}
          setRecurringPeriod={setRecurringPeriod}
        />
      )}
      <div className="formRow">
        <label className="formLabel">Name:</label>
        <TextInput value={name} setValue={setName} />
      </div>
      <div className="formRow">
        <label className="formLabel">Category:</label>
        <Dropdown
          dropDownItem={category}
          setDropdownItem={setCategory}
          dropDownData={categories}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">Amount:</label>
        <NumberInput value={amount} setValue={setAmount} />
      </div>
      <FromToForm
        from={from}
        setFrom={setFrom}
        accounts={accounts}
        to={to}
        setTo={setTo}
      />
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedTransaction}
        submitHandler={submitHandler}
        itemName={"Transaction"}
      />
    </form>
  );
};

export default TransactionForm;
