import { navigate } from "gatsby";
import * as React from "react";
import { fetchAccounts, updateAccounts } from "../../accountsHelper";
import Button from "../atoms/button";
import Headline from "../atoms/headline";
import TextInput from "../atoms/textInput";
import ErrorInfo from "../level1/errorInfo";

const EditAccount = ({ id }: { id: string }) => {
  const accountId = id;
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [account, setAccount] = React.useState<Account | null>(null);

  const deleteAccount = () => {
    async function deleteAccounts(resolveUpdate: () => void): Promise<void> {
      await fetch(`http://localhost:3000/api/accounts/${accountId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          await res.json().then(resolveUpdate).catch();
        })
        .catch();
    }
    deleteAccounts(resolveUpdate);
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveUpdate(): void {
    navigate("/accounts");
  }

  function updateAccount(): void {
    updateAccounts(resolveUpdate, accountId, account, name);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateAccount();
  };

  function resolveFetching(data: Account): void {
    setName(data.name);
    setAccount(data);
    setTemplateReady(true);
  }

  function loadAccounts(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchAccounts(resolveFetching, handleError, accountId);
  }

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="accountsCard">
            <Headline text="Edit account" style="accountsHeadline" />
            <form onSubmit={submitHandler}>
              <div className="formRow">
                <label className="formLabel">Name:</label>
                <TextInput value={name} setValue={setName} />
              </div>
              <div className="formRow">
                <input type="submit" value="Update account" />
                <Button
                  onClick={deleteAccount}
                  text={"Delete Account"}
                  color="redButton"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default EditAccount;
