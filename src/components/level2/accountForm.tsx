import * as React from "react";
import TextInput from "../atoms/textInput";
import { accountTypes } from "../../helpers/accountsHelper";
import { AccountFormProps } from "../../accountTypes";
import EditFormSubmit from "../level1/editFormSubmit";
import { fieldsValid, formValidationMessage } from "../../helpers/helpers";
import FormDropdown from "../level1/formDropdown";

const AccountForm = ({
  submitHandler,
  name,
  setName,
  accountType,
  setAccountType,
  deleteSelectedAccount,
}: AccountFormProps) => {
  const [error, setError] = React.useState<string>("");

  return (
    <form>
      <div className="formRow">
        <label className="formLabel">Name:</label>
        <TextInput value={name} setValue={setName} />
      </div>
      <FormDropdown
        dropDownItem={accountType}
        setDropdownItem={setAccountType}
        dropDownData={accountTypes}
        dropdownName="Type:"
      />
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedAccount}
        submitHandler={(e) => {
          if (fieldsValid([name])) {
            submitHandler(e);
          } else {
            setError(formValidationMessage);
          }
        }}
        itemName={"Account"}
      />
      {error.length > 0 && (
        <div className="formRow">
          <label className="formErrorLabel">{error}</label>
        </div>
      )}
    </form>
  );
};

export default AccountForm;
