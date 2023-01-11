import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../atoms/headline";
import NumberInput from "../atoms/numberInput";
import TextInput from "../atoms/textInput";
import DateInput from "../atoms/dateInput";
import Dropdown, { DropdownItem, DropdownTypes } from "../atoms/dropdown";
import { categories, postTransaction } from "../../transactionHelper";
import ErrorInfo from "../level1/errorInfo";
import { emptyAccountDDItem, fetchAccounts } from "../../accountsHelper";

const NewTransaction = () => {
  const [date, setDate] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>({
    id: 2,
    value: "Food",
  });
  const [amount, setAmount] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [to, setTo] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<DropdownItem[]>([]);

  function resolvePost(): void {
    navigate("/transactions");
  }

  function addNewTransaction(): void {
    postTransaction(resolvePost, date, name, category, amount, from, to);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewTransaction();
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Account[]): void {
    const accountsData = [emptyAccountDDItem].concat(
      data.map((account) => {
        return { id: account.id, value: account.name };
      })
    );
    setAccounts(accountsData);
    setTemplateReady(true);
  }

  function loadAccounts(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchAccounts(resolveFetching, handleError);
  }

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="transactionsCard">
            <Headline
              text="Add a new transaction"
              style="transactionsHeadline"
            />
            <form onSubmit={submitHandler}>
              <div className="formRow">
                <label className="formLabel">Date:</label>
                <DateInput value={date} setValue={setDate} />
              </div>
              <div className="formRow">
                <label className="formLabel">Name:</label>
                <TextInput value={name} setValue={setName} />
              </div>
              <div className="formRow">
                <label className="formLabel">Category:</label>
                <Dropdown
                  dropDownItem={category}
                  setDropdownItem={setCategory}
                  dropDownData={categories}
                  type={DropdownTypes.Value}
                  verticalForm={false}
                />
              </div>
              <div className="formRow">
                <label className="formLabel">Amount:</label>
                <NumberInput value={amount} setValue={setAmount} />
              </div>
              <div className="formRow">
                <label className="formLabel">From:</label>
                <Dropdown
                  dropDownItem={from}
                  setDropdownItem={setFrom}
                  dropDownData={accounts}
                  type={DropdownTypes.Value}
                  verticalForm={false}
                />
              </div>
              <div className="formRow">
                <label className="formLabel">To:</label>
                <Dropdown
                  dropDownItem={to}
                  setDropdownItem={setTo}
                  dropDownData={accounts}
                  type={DropdownTypes.Value}
                  verticalForm={false}
                />
              </div>
              <div className="formRow">
                <input type="submit" value="Add transaction" />
              </div>
            </form>
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadAccounts} />}
    </>
  );
};

export default NewTransaction;
