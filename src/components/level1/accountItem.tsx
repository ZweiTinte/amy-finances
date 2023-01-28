import * as React from "react";
import { euroFormat } from "../../helpers";
import Button from "../atoms/button";
import { navigate } from "gatsby";

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
        <Button
          color={"editButton"}
          onClick={() => navigate(`/transactions/${account.id}`)}
          text={"Edit"}
        />
      </span>
    </>
  );
};

export default AccountItem;
