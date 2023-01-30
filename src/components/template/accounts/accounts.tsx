import * as React from "react";
import { euroFormat } from "../../../helpers/helpers";
import AccountItem from "../../level1/accountItem";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import { navigate } from "gatsby";

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
          <div className="formRowDefault">
            <Headline text="Accounts Overview" style="accountsHeadline" />
            <Button
              color={"addButton"}
              onClick={() => navigate("/accounts/new")}
              text={"Add New Account"}
            />
          </div>
          <div className="accountProps">
            <span className="accountIban">IBAN</span>
            <span className="accountName">Name</span>
            <span className="accountType">Type</span>
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
