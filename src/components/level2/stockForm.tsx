import * as React from "react";
import NumberInput from "../atoms/numberInput";
import EditFormSubmit from "../level1/editFormSubmit";
import TextInput from "../atoms/textInput";
import { StockFormProps } from "../../stockTypes";

const StockForm = ({
  submitHandler,
  price,
  setPrice,
  isin,
  setIsin,
  name,
  setName,
  deleteSelectedStock,
}: StockFormProps) => {
  return (
    <form>
      <div className="formRow">
        <label className="formLabel">ISIN:</label>
        <TextInput value={isin} setValue={setIsin} />
      </div>
      <div className="formRow">
        <label className="formLabel">Name:</label>
        <TextInput value={name} setValue={setName} />
      </div>
      <div className="formRow">
        <label className="formLabel">Price:</label>
        <NumberInput value={price} setValue={setPrice} />
      </div>
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedStock}
        submitHandler={submitHandler}
        itemName={"Stock"}
      />
    </form>
  );
};

export default StockForm;
