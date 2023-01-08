import * as React from "react";
import { euroFormat } from "../../helpers";
import AccountItem from "../atoms/accountItem";
import Headline from "../atoms/headline";

const Accounts = ({
  accounts,
  totalBalance,
}: {
  accounts: Account[];
  totalBalance: number;
}) => {
  return (
    <>
      <div className="gameLayout">
        <div className="accountsCard">
          <Headline text="Accounts Overview" style="accountsHeadline" />
          <div className="accountProps">
            <span className="accountIban">IBAN</span>
            <span className="accountName">Name</span>
            <span className="accountBalanceHeadline">Balance</span>
          </div>
          {accounts.map((item) => {
            return (
              <div className="accountInfos" key={item.id}>
                <AccountItem account={item} />
              </div>
            );
          })}
          <div className="accountsSummary">
            <span className="accountsSum">Total Balance:</span>
            <span className="accountBalance">
              {euroFormat.format(totalBalance)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
