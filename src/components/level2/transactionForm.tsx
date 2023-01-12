import * as React from "react";
import NumberInput from "../atoms/numberInput";
import TextInput from "../atoms/textInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import { categories } from "../../categoriesHelper";
import Button from "../atoms/button";
import { TransactionFormProps } from "../../transactionTypes";

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
}: TransactionFormProps) => {
  console.log(from, to, category, accounts);

  return (
    <form onSubmit={submitHandler}>
      <div className="formRow">
        <label className="formLabel">Date:</label>
        <DateInput value={date} setValue={setDate} />
      </div>
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
      <div className="formRow">
        <label className="formLabel">From:</label>
        <Dropdown
          dropDownItem={from}
          setDropdownItem={setFrom}
          dropDownData={accounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">To:</label>
        <Dropdown
          dropDownItem={to}
          setDropdownItem={setTo}
          dropDownData={accounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      {deleteSelectedTransaction === undefined ? (
        <div className="formRow">
          <input type="submit" value="Add transaction" />
        </div>
      ) : (
        <div className="formRow">
          <input type="submit" value="Update transaction" />
          <Button
            onClick={deleteSelectedTransaction}
            text={"Delete Transaction"}
            color="redButton"
          />
        </div>
      )}
    </form>
  );
};

export default TransactionForm;
