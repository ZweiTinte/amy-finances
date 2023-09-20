import * as React from "react";
import { euroFormat } from "../../../helpers/helpers";
import AccountItemRow from "../../level1/accountItem";
import Headline from "../../atoms/headline";
import LinkButton from "../../atoms/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../atoms/button";
import { getAccountItems } from "../../../helpers/accountsHelper";
import { accountItemFields } from "../../../helpers/accountsConsts";
import { download } from "../../../helpers/downloadService";

const Accounts = ({
  accounts,
  totalBalance,
}: {
  accounts: Account[];
  totalBalance: number;
}) => {
  const accountItems = getAccountItems(accounts);
  return (
    <>
      {accounts && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Accounts Overview" style="cardHeadline" />
              <div className="inlineRow">
                <Button
                  onClick={() => {
                    download("accounts", accountItemFields, accountItems);
                  }}
                  text="Download"
                  color={"downloadButton"}
                />
                <LinkButton
                  to="/accounts/new"
                  title="add new account"
                  classes="addLink"
                >
                  <PlusIcon className="heroIcon" />
                </LinkButton>
              </div>
            </div>
            <div className="overviewHead">
              <span className="accountIban">IBAN</span>
              <span className="overviewAccount">Name</span>
              <span className="accountType">Type</span>
              <span className="accountBalanceHeadline">Balance</span>
            </div>
            {accountItems.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== accounts.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <AccountItemRow account={item} />
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
