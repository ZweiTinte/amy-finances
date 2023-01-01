import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Dropdown, { DropdownItem } from "../atoms/dropdown";
import Headline from "../atoms/headline";

const SidebarRight = ({ accounts }: { accounts: Account[] }) => {
  const accountsData: DropdownItem[] = accounts.map((account) => {
    return { id: account.id, value: account.name };
  });
  const [selectedAccount, setSelectedAccount] = React.useState<DropdownItem>(
    accountsData[0]
  );

  return (
    <div className="sidebarRight">
      <Headline text={"Accounts Menu"} style="sidebarHeadline" />
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
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate(`/accounts/${selectedAccount.id}`)}
        text={"Edit"}
      />
    </div>
  );
};

export default SidebarRight;
