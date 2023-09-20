import { navigate } from "gatsby";
import * as React from "react";
import {
  deleteAccount,
  fetchAccount,
  updateAccount,
} from "../../../api/accountsApi";
import Headline from "../../atoms/headline";
import ErrorInfo from "../../level1/errorInfo";
import { accountTypes } from "../../../helpers/accountsConsts";
import AccountForm from "../../level2/accountForm";
import { DropdownItem } from "../../../dropdownTypes";

const EditAccount = ({ id }: { id: string }) => {
  const accountId = id;
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [account, setAccount] = React.useState<Account | null>(null);
  const [accountType, setAccountType] = React.useState<DropdownItem>(
    accountTypes[0]
  );

  const deleteSelectedAccount = () => {
    deleteAccount(resolveUpdate, accountId);
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveUpdate(): void {
    navigate("/accounts");
  }

  function updateAccountItem(): void {
    updateAccount(resolveUpdate, accountId, account, name, accountType.value);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateAccountItem();
  };

  function resolveFetching(data: Account): void {
    setName(data.name);
    setAccountType(
      accountTypes.filter((type) => {
        return type.value === data.accountType;
      })[0]
    );
    setAccount(data);
    setTemplateReady(true);
  }

  function loadAccount(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchAccount(resolveFetching, handleError, accountId);
  }

  React.useEffect(() => {
    loadAccount();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="overviewCard">
            <Headline text="Edit account" style="cardHeadline" />
            <AccountForm
              submitHandler={submitHandler}
              name={name}
              setName={setName}
              accountType={accountType}
              setAccountType={setAccountType}
              deleteSelectedAccount={deleteSelectedAccount}
            />
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccount} />}
    </>
  );
};

export default EditAccount;
