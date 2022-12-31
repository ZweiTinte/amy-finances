import * as React from "react";
import { euroFormat } from "../../helpers";

interface AccountProps {
  account: Account;
}

const AccountItem = ({ account }: AccountProps) => {
  return (
    <>
      <span className="accountIban">{account.iban}</span>
      <span className="accountName">{account.name}</span>
      <span className="accountBalance">
        {euroFormat.format(account.balance)}
      </span>
    </>
  );
};

export default AccountItem;
