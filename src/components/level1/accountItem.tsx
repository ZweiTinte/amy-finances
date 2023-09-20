import * as React from "react";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import { AccountItem } from "../../accountTypes";

const AccountItemRow = ({ account }: { account: AccountItem }) => {
  return (
    <>
      <span className="accountIban">{account.iban}</span>
      <span className="overviewAccount">{account.name}</span>
      <span className="accountType">{account.type}</span>
      <span className="accountBalance">{account.balance}</span>
      <span>
        <LinkButton to={`/accounts/${account.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default AccountItemRow;
