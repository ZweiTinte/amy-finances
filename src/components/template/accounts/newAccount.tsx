import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import NumberInput from "../../atoms/numberInput";
import TextInput from "../../atoms/textInput";

const NewAccount = () => {
  const [iban, setIban] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [balance, setBalance] = React.useState<string>("");

  function resolveFetching(): void {
    navigate("/accounts");
  }

  function addNewAccount(): void {
    async function fetchAccounts(resolveFetching: () => void): Promise<void> {
      await fetch("http://localhost:3000/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          iban: iban,
          name: name,
          balance: parseFloat(balance),
        }),
      })
        .then(async (res) => {
          await res.json().then(resolveFetching).catch();
        })
        .catch();
    }
    fetchAccounts(resolveFetching);
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
              <input type="submit" value="Add new account" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewAccount;
