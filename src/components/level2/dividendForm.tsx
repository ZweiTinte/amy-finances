import * as React from "react";
import NumberInput from "../atoms/numberInput";
import DateInput from "../atoms/dateInput";
import EditFormSubmit from "../level1/editFormSubmit";
import { DividendFormProps } from "../../dividendTypes";
import { fieldsValid, formValidationMessage } from "../../helpers/helpers";
import FormDropdown from "../level1/formDropdown";

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
  const [error, setError] = React.useState<string>("");

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
      <FormDropdown
        dropDownItem={stock}
        setDropdownItem={setStock}
        dropDownData={stocks}
        dropdownName="Stock:"
      />
      <div className="formRow">
        <label className="formLabel">Amount:</label>
        <NumberInput value={amountBeforeTax} setValue={setAmountBeforeTax} />
      </div>
      <div className="formRow">
        <label className="formLabel">Tax:</label>
        <NumberInput value={taxAmount} setValue={setTaxAmount} />
      </div>
      <FormDropdown
        dropDownItem={to}
        setDropdownItem={setTo}
        dropDownData={accounts}
        dropdownName="To:"
      />
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedDividend}
        submitHandler={(e) => {
          if (fieldsValid([payDate, exDate, amountBeforeTax, taxAmount])) {
            submitHandler(e);
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Dividend"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default DividendForm;
