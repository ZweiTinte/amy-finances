import * as React from "react";
import NumberInput from "../atoms/numberInput";
import DateInput from "../atoms/dateInput";
import { TransactionTemplateProps } from "../../transactionTypes";
import { categories, transactionTypes } from "../../helpers/transactionConsts";
import RecurringForm from "../level1/recurringForm";
import FromToForm from "../level1/fromToForm";
import FormDropdown from "../level1/formDropdown";
import DropdownSearch from "../atoms/dropdownSearch";
import { getTransactionSuggestions } from "../../helpers/dropdownHelpers";
import { DropdownTypes } from "../../dropdownTypes";

const TransactionFormInputs = ({
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
  accountsData,
  to,
  setTo,
  transactionType,
  setTransactionType,
  recurringEnd,
  setRecurringGap,
  recurringGap,
  recurringPeriod,
  setRecurringEnd,
  setRecurringPeriod,
  transactions,
}: TransactionTemplateProps) => {
  return (
    <>
      <FormDropdown
        dropDownItem={transactionType}
        setDropdownItem={setTransactionType}
        dropDownData={transactionTypes}
        dropdownName="Type:"
      />
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
        <DropdownSearch
          dropDownItem={name}
          setDropdownItem={setName}
          dropDownData={getTransactionSuggestions(transactions)}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <FormDropdown
        dropDownItem={category}
        setDropdownItem={setCategory}
        dropDownData={categories}
        dropdownName="Category:"
      />
      <div className="formRow">
        <label className="formLabel">Amount:</label>
        <NumberInput value={amount} setValue={setAmount} />
      </div>
      <FromToForm
        from={from}
        setFrom={setFrom}
        accounts={accountsData}
        to={to}
        setTo={setTo}
      />
    </>
  );
};

export default TransactionFormInputs;
