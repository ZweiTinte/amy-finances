import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import NumberInput from "../../atoms/numberInput";
import TextInput from "../../atoms/textInput";
import Dropdown, { DropdownItem, DropdownTypes } from "../../atoms/dropdown";
import { accountTypes, postAccount } from "../../../accountsHelper";

const NewAccount = () => {
  const [iban, setIban] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [balance, setBalance] = React.useState<string>("");
  const [accountType, setAccountType] = React.useState<DropdownItem>(
    accountTypes[0]
  );

  function resolveFetching(): void {
    navigate("/accounts");
  }

  function addNewAccount(): void {
    postAccount(resolveFetching, iban, name, balance, accountType.value);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewAccount();
  };

  return (
    <>
      <div className="gameLayout">
        <div className="accountsCard">
          <Headline text="Add a new account" style="accountsHeadline" />
          <form onSubmit={submitHandler}>
            <div className="formRow">
              <label className="formLabel">IBAN:</label>
              <TextInput value={iban} setValue={setIban} />
            </div>
            <div className="formRow">
              <label className="formLabel">Name:</label>
              <TextInput value={name} setValue={setName} />
            </div>
            <div className="formRow">
              <label className="formLabel">Balance:</label>
              <NumberInput value={balance} setValue={setBalance} />
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
            <div className="formRow">
              <input type="submit" value="Add new account" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewAccount;
