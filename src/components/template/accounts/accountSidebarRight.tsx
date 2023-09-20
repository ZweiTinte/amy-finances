import * as React from "react";
import Button from "../../atoms/button";
import Headline from "../../atoms/headline";
import { accountTypes } from "../../../helpers/accountsConsts";
import { getAccountTypes } from "../../../helpers/filtersHelper";
import MultiselectFilter from "../../level2/multiselectFilter";
import { DropdownItem } from "../../../dropdownTypes";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../../../helpers/storageHelper";

const AccountSidebarRight = ({
  accounts,
  setFilteredAccounts,
  setFiltered,
}: {
  accounts: Account[];
  setFilteredAccounts: React.Dispatch<React.SetStateAction<Account[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const accountsData: DropdownItem[] = accounts.map((account) => {
    return { id: account.id, value: account.name };
  });
  const [selectedAccountTypes, setSelectedAccountTypes] = React.useState<
    DropdownItem[]
  >(getFromLocalStorage("selectedOverviewAccountTypes", accountTypes));
  const [selectedAccounts, setSelectedAccounts] = React.useState<
    DropdownItem[]
  >(getFromLocalStorage("selectedOverviewAccounts", accountsData));

  React.useEffect(() => {
    const filteredAccountTypes: string[] = selectedAccountTypes.map(
      (accountType) => {
        return accountType.value;
      }
    );
    const filteredAccounts: number[] = selectedAccounts.map((account) => {
      return account.id;
    });
    const newAccounts = accounts.filter((account) => {
      return (
        filteredAccountTypes.includes(account.accountType) &&
        filteredAccounts.includes(account.id)
      );
    });
    setLocalStorage("selectedOverviewAccounts", selectedAccounts);
    setLocalStorage("selectedOverviewAccountTypes", selectedAccountTypes);
    setFilteredAccounts(newAccounts);
    setFiltered(true);
  }, [selectedAccountTypes, selectedAccounts]);

  return (
    <div className="sidebarRightData">
      <Headline text={"ACCOUNT FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedAccounts(accountsData);
          setSelectedAccountTypes(accountTypes);
        }}
        text={"Reset Filters"}
      />
      <MultiselectFilter
        selected={selectedAccounts}
        setSelected={setSelectedAccounts}
        data={accountsData}
        label={"Filter Accounts"}
        style={"sidebarSubHeadline"}
      />
      <MultiselectFilter
        selected={selectedAccountTypes}
        setSelected={setSelectedAccountTypes}
        data={getAccountTypes(accounts)}
        label={"Filter Account Types"}
      />
    </div>
  );
};

export default AccountSidebarRight;
