import * as React from "react";
import NumberInput from "../atoms/numberInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import EditFormSubmit from "../level1/editFormSubmit";
import { DividendFormProps } from "../../dividendTypes";

const DividendForm = ({
  submitHandler,
  payDate,
  setPayDate,
  exDate,
  setExDate,
  amountBeforeTax,
  setAmountBeforeTax,
  accounts,
  to,
  setTo,
  stocks,
  stock,
  setStock,
  taxAmount,
  setTaxAmount,
  deleteSelectedDividend,
}: DividendFormProps) => {
  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Pay-Date:</label>
        <DateInput value={payDate} setValue={setPayDate} />
      </div>
      <div className="formRow">
        <label className="formLabel">Ex-Date:</label>
        <DateInput value={exDate} setValue={setExDate} />
      </div>
      <div className="formRow">
        <label className="formLabel">Stock:</label>
        <Dropdown
          dropDownItem={stock}
          setDropdownItem={setStock}
          dropDownData={stocks}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">Amount:</label>
        <NumberInput value={amountBeforeTax} setValue={setAmountBeforeTax} />
      </div>
      <div className="formRow">
        <label className="formLabel">Tax:</label>
        <NumberInput value={taxAmount} setValue={setTaxAmount} />
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
        deleteSelectedItem={deleteSelectedDividend}
        submitHandler={submitHandler}
        itemName={"Dividend"}
      />
    </form>
  );
};

export default DividendForm;
