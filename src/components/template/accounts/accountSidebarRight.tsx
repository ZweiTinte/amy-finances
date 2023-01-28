import * as React from "react";
import Button from "../../atoms/button";
import { DropdownItem } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import Multiselect from "../../atoms/multiselect";
import EmptyAllButtonGroup from "../../level1/emptyAllButtonGroup";
import { accountTypes } from "../../../accountsHelper";
import { getAccountTypes } from "../../../filtersHelper";

const AccountSidebarRight = ({
  accounts,
  setFilteredAccounts,
}: {
  accounts: Account[];
  setFilteredAccounts: React.Dispatch<React.SetStateAction<Account[]>>;
}) => {
  const accountsData: DropdownItem[] = accounts.map((account) => {
    return { id: account.id, value: account.name };
  });
  const [selectedAccount, setSelectedAccount] = React.useState<DropdownItem>(
    accountsData[0]
  );
  const [selectedAccountTypes, setSelectedAccountTypes] =
    React.useState<DropdownItem[]>(accountTypes);
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accountsData);

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
    setFilteredAccounts(newAccounts);
  }, [selectedAccountTypes, selectedAccounts]);

  return (
    <div className="sidebarRight">
      <Headline text={"ACCOUNT FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedAccounts(accountsData);
          setSelectedAccountTypes(accountTypes);
        }}
        text={"Reset Filters"}
      />
      <Headline text={"Filter Accounts"} style="sidebarSubHeadline" />
      <Multiselect
        dropDownItems={selectedAccounts}
        setDropdownItems={setSelectedAccounts}
        dropDownData={accountsData}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedAccounts([])}
        onAllClick={() => setSelectedAccounts(accountsData)}
      />
      <Headline text={"Filter Account Types"} style="sidebarSubHeadline" />
      <Multiselect
        dropDownItems={selectedAccountTypes}
        setDropdownItems={setSelectedAccountTypes}
        dropDownData={getAccountTypes(accounts)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedAccountTypes([])}
        onAllClick={() => setSelectedAccountTypes(getAccountTypes(accounts))}
      />
    </div>
  );
};

export default AccountSidebarRight;
