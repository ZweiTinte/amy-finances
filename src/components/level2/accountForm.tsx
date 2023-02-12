import * as React from "react";
import TextInput from "../atoms/textInput";
import Dropdown, { DropdownTypes } from "../atoms/dropdown";
import Button from "../atoms/button";
import { accountTypes } from "../../helpers/accountsHelper";
import { AccountFormProps } from "../../accountTypes";

const AccountForm = ({
  submitHandler,
  name,
  setName,
  accountType,
  setAccountType,
  deleteSelectedAccount,
}: AccountFormProps) => {
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(false);
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
      {deleteSelectedAccount === undefined ? (
        <div className="formRow">
          <input type="submit" value="Add account" />
        </div>
      ) : (
        <>
          <div className="formRow">
            <input type="submit" value="Update account" />
            <Button
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                setDeleteConfirm(true);
              }}
              text={"Delete Account"}
              color="redButton"
            />
          </div>
          {deleteConfirm && (
            <div className="deleteConfirmRow">
              <label className="formLabel">Are you sure?</label>
              <Button
                onClick={deleteSelectedAccount}
                text={"Yes!"}
                color="redButton"
              />
            </div>
          )}
        </>
      )}
    </form>
  );
};

export default AccountForm;
