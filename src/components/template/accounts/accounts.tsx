import * as React from "react";
import { euroFormat } from "../../../helpers/helpers";
import AccountItem from "../../level1/accountItem";
import Headline from "../../atoms/headline";
import LinkButton from "../../atoms/link";
import { PlusIcon } from "@heroicons/react/24/solid";

const Accounts = ({
  accounts,
  totalBalance,
}: {
  accounts: Account[];
  totalBalance: number;
}) => {
  return (
    <>
      {accounts && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Accounts Overview" style="cardHeadline" />
              <LinkButton to="/accounts/new" title="add new account">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="overviewHead">
              <span className="accountIban">IBAN</span>
              <span className="overviewAccount">Name</span>
              <span className="accountType">Type</span>
              <span className="accountBalanceHeadline">Balance</span>
            </div>
            {accounts.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== accounts.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <AccountItem account={item} />
                </div>
              );
            })}
            <div className="overviewSummary">
              <span className="accountsSum">Total Balance:</span>
              <span className="accountBalance">
                {euroFormat.format(totalBalance)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accounts;
