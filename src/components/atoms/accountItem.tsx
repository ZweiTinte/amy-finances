import * as React from "react";

interface AccountProps {
  account: Account;
}

const AccountItem = ({ account }: AccountProps) => {
  return (
    <>
      <span className="accountIban">{account.iban}</span>
      <span className="accountName">{account.name}</span>
      <span className="accountBalance">{"1.000,00€"}</span>
    </>
  );
};

export default AccountItem;
