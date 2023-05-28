import * as React from "react";
import NumberInput from "../atoms/numberInput";
import EditFormSubmit from "../level1/editFormSubmit";
import TextInput from "../atoms/textInput";
import {
  categoryTypes,
  fieldsValid,
  formValidationMessage,
} from "../../helpers/helpers";
import { CategoryFormProps } from "../../categoryTypes";
import FormDropdown from "../level1/formDropdown";

const CategoryForm = ({
  submitHandler,
  name,
  setName,
  deleteSelectedCategory,
  type,
  setType,
}: CategoryFormProps) => {
  const [error, setError] = React.useState<string>("");

  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Name:</label>
        <TextInput value={name} setValue={setName} />
      </div>
      <FormDropdown
        dropDownItem={type}
        setDropdownItem={setType}
        dropDownData={categoryTypes}
        dropdownName="Type:"
      />
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedCategory}
        submitHandler={(e) => {
          if (fieldsValid([name])) {
            submitHandler(e);
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Category"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default CategoryForm;
