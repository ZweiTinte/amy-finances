import * as React from "react";
import NumberInput from "../atoms/numberInput";
import TextInput from "../atoms/textInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import { categories } from "../../helpers/categoriesHelper";
import { TransactionFormProps } from "../../transactionTypes";
import EditFormSubmit from "../level1/editFormSubmit";

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
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(false);

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
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedTransaction}
        itemName={"Transaction"}
      />
    </form>
  );
};

export default TransactionForm;
