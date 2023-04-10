import * as React from "react";
import NumberInput from "../atoms/numberInput";
import DateInput from "../atoms/dateInput";
import { OrderFormProps } from "../../orderTypes";
import { orderTypes } from "../../helpers/ordersHelper";
import EditFormSubmit from "../level1/editFormSubmit";
import { fieldsValid, formValidationMessage } from "../../helpers/helpers";
import FromToForm from "../level1/fromToForm";
import FormDropdown from "../level1/formDropdown";

const OrderForm = ({
  submitHandler,
  date,
  setDate,
  amount,
  setAmount,
  from,
  setFrom,
  accounts,
  to,
  setTo,
  stocks,
  stock,
  setStock,
  price,
  setPrice,
  cost,
  setCost,
  orderType,
  setOrderType,
  deleteSelectedOrder,
}: OrderFormProps) => {
  const [error, setError] = React.useState<string>("");

  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Date:</label>
        <DateInput value={date} setValue={setDate} />
      </div>
      <FormDropdown
        dropDownItem={orderType}
        setDropdownItem={setOrderType}
        dropDownData={orderTypes}
        dropdownName="Order Type:"
      />
      <FormDropdown
        dropDownItem={stock}
        setDropdownItem={setStock}
        dropDownData={stocks}
        dropdownName="Stock:"
      />
      <div className="formRow">
        <label className="formLabel">Amount:</label>
        <NumberInput value={amount} setValue={setAmount} />
      </div>
      <div className="formRow">
        <label className="formLabel">Price:</label>
        <NumberInput value={price} setValue={setPrice} />
      </div>
      <div className="formRow">
        <label className="formLabel">Cost:</label>
        <NumberInput value={cost} setValue={setCost} />
      </div>
      <FromToForm
        from={from}
        setFrom={setFrom}
        accounts={accounts}
        to={to}
        setTo={setTo}
      />
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedOrder}
        submitHandler={(e) => {
          if (fieldsValid([date, amount, price, cost])) {
            submitHandler(e);
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Order"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default OrderForm;
