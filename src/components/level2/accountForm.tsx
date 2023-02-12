import * as React from "react";
import TextInput from "../atoms/textInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import { accountTypes } from "../../helpers/accountsHelper";
import { AccountFormProps } from "../../accountTypes";
import EditFormSubmit from "../level1/editFormSubmit";

const AccountForm = ({
  submitHandler,
  name,
  setName,
  accountType,
  setAccountType,
  deleteSelectedAccount,
}: AccountFormProps) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="formRow">
        <label className="formLabel">Name:</label>
        <TextInput value={name} setValue={setName} />
      </div>
      <div className="formRow">
        <label className="formLabel">Type:</label>
        <Dropdown
          dropDownItem={accountType}
          setDropdownItem={setAccountType}
          dropDownData={accountTypes}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <EditFormSubmit
        deleteSelectedItem={deleteSelectedAccount}
        itemName={"Account"}
      />
    </form>
  );
};

export default AccountForm;
