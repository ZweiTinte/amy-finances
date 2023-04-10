import * as React from "react";
import NumberInput from "../atoms/numberInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import { OrderFormProps } from "../../orderTypes";
import { orderTypes } from "../../helpers/ordersHelper";
import EditFormSubmit from "../level1/editFormSubmit";

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
  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Date:</label>
        <DateInput value={date} setValue={setDate} />
      </div>
      <div className="formRow">
        <label className="formLabel">Order Type:</label>
        <Dropdown
          dropDownItem={orderType}
          setDropdownItem={setOrderType}
          dropDownData={orderTypes}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
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
        deleteSelectedItem={deleteSelectedOrder}
        submitHandler={submitHandler}
        itemName={"Order"}
      />
    </form>
  );
};

export default OrderForm;
