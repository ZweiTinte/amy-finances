import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Dropdown, { DropdownItem, DropdownTypes } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import Multiselect from "../atoms/multiselect";

const AccountSidebarRight = ({
  accounts,
  setFilteredAccounts,
  filteredAccountsData,
}: {
  accounts: Account[];
  filteredAccountsData: Account[];
  setFilteredAccounts: React.Dispatch<React.SetStateAction<Account[]>>;
}) => {
  const accountsData: DropdownItem[] = accounts.map((account) => {
    return { id: account.id, value: account.name };
  });
  const filteredAccounts: DropdownItem[] = filteredAccountsData.map(
    (account) => {
      return { id: account.id, value: account.name };
    }
  );
  const [selectedAccount, setSelectedAccount] = React.useState<DropdownItem>(
    accountsData[0]
  );

  return (
    <div className="sidebarRight">
      <Headline text={"ACCOUNTS MENU"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton"}
        onClick={() => navigate("/accounts/new")}
        text={"Add New Account"}
      />
      <Headline text={"Edit Account"} style="sidebarSubHeadline" />
      <Dropdown
        dropDownItem={selectedAccount}
        setDropdownItem={setSelectedAccount}
        dropDownData={accountsData}
        type={DropdownTypes.Value}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate(`/accounts/${selectedAccount.id}`)}
        text={"Edit"}
      />
      <Headline text={"Filter Accounts"} style="sidebarSubHeadline" />
      <Multiselect
        dropDownItems={filteredAccounts}
        setDropdownItems={setFilteredAccounts}
        dropDownData={accountsData}
        items={accounts}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => setFilteredAccounts(accounts)}
        text={"Select all"}
      />
    </div>
  );
};

export default AccountSidebarRight;
