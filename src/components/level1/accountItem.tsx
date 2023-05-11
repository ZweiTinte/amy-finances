import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface AccountProps {
  account: Account;
}

const AccountItem = ({ account }: AccountProps) => {
  return (
    <>
      <span className="accountIban">{account.iban}</span>
      <span className="accountName">{account.name}</span>
      <span className="accountType">{account.accountType}</span>
      <span className="accountBalance">
        {euroFormat.format(account.balance)}
      </span>
      <span>
        <LinkButton to={`/accounts/${account.id}`}>
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default AccountItem;
