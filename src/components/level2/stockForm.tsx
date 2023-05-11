import * as React from "react";
import NumberInput from "../atoms/numberInput";
import EditFormSubmit from "../level1/editFormSubmit";
import TextInput from "../atoms/textInput";
import { StockFormProps } from "../../stockTypes";
import { fieldsValid, formValidationMessage } from "../../helpers/helpers";
import Checkbox from "../atoms/checkbox";

const StockForm = ({
  submitHandler,
  price,
  setPrice,
  isin,
  setIsin,
  name,
  setName,
  deleteSelectedStock,
  link,
  setLink,
  watchlisted,
  setWatchlisted,
}: StockFormProps) => {
  const [error, setError] = React.useState<string>("");

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
      <div className="formRow">
        <label className="formLabel">Link (optional):</label>
        <TextInput value={link} setValue={setLink} />
      </div>
      <div className="formRow">
        <label className="formLabel">Watchlisted:</label>
        <Checkbox
          form
          checked={watchlisted}
          label=""
          onClick={() => setWatchlisted(!watchlisted)}
        />
      </div>
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedStock}
        submitHandler={(e) => {
          if (fieldsValid([isin, name, price])) {
            if (isin.length === 12) {
              submitHandler(e);
            } else {
              setError("ISIN must be exactly 12 characters long!");
            }
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Stock"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default StockForm;
