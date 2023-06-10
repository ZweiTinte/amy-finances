import * as React from "react";
import Dropdown from "../atoms/dropdown";
import { DropdownItem, DropdownTypes } from "../../dropdownTypes";
import { getDDItem } from "../../helpers/helpers";

const FromToForm = ({
  from,
  setFrom,
  accounts,
  to,
  setTo,
  transactions,
}: {
  from: DropdownItem;
  setFrom: React.Dispatch<React.SetStateAction<DropdownItem>>;
  accounts: DropdownItem[];
  to: DropdownItem;
  setTo: React.Dispatch<React.SetStateAction<DropdownItem>>;
  transactions?: Transaction[];
}) => {
  function getAccountSuggestions(
    transactions: Transaction[] | undefined,
    accounts: DropdownItem[],
    from: boolean
  ): DropdownItem[] {
    if (transactions) {
      let suggestionIds: { id: number; amount: number }[] = accounts.map(
        (account) => {
          return {
            id: account.id,
            amount: 0,
          };
        }
      );
      if (transactions) {
        transactions.forEach((trans) => {
          let suggestion = suggestionIds.filter((sug) => {
            if (from) {
              return sug.id === trans.from;
            }
            return sug.id === trans.to;
          })[0];
          suggestion.amount++;
        });
      }
      suggestionIds.sort((a, b) => {
        return b.amount - a.amount;
      });
      return suggestionIds.map((sug) => {
        return getDDItem(sug.id, accounts);
      });
    }
    return accounts;
  }

  const fromAccounts = getAccountSuggestions(transactions, accounts, true);
  const toAccounts = getAccountSuggestions(transactions, accounts, false);

  return (
    <>
      <div className="formRow">
        <label className="formLabel">From:</label>
        <Dropdown
          dropDownItem={from}
          setDropdownItem={setFrom}
          dropDownData={fromAccounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">To:</label>
        <Dropdown
          dropDownItem={to}
          setDropdownItem={setTo}
          dropDownData={toAccounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
    </>
  );
};

export default FromToForm;
