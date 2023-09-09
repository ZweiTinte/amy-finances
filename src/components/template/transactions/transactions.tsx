import * as React from "react";
import Headline from "../../atoms/headline";
import TransactionItem from "../../level1/transactionItem";
import { euroFormat } from "../../../helpers/helpers";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";
import { DropdownItem } from "../../../dropdownTypes";
import Button from "../../atoms/button";
import { download } from "../../../helpers/downloadService";

const Transactions = ({
  transactions,
  accounts,
  totalBalance,
  categories,
}: {
  transactions: Transaction[];
  accounts: Account[];
  totalBalance: number;
  categories: DropdownItem[];
}) => {
  return (
    <>
      {transactions && accounts && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Transactions Overview" style="cardHeadline" />
              <div className="inlineRow">
                <Button
                  onClick={() =>
                    download("transactions", transactions, categories, accounts)
                  }
                  text="Download"
                  color={"downloadButton"}
                />
                <LinkButton
                  to="/transactions/new"
                  title="add new transaction"
                  classes="addLink"
                >
                  <PlusIcon className="heroIcon" />
                </LinkButton>
              </div>
            </div>
            <div className="overviewHead">
              <span className="overviewId">ID</span>
              <span className="overviewDate">Type</span>
              <span className="overviewDate">Date</span>
              <span className="transactionName">Name</span>
              <span className="overviewCategory">Category</span>
              <span className="overviewAmountHeadline">Amount</span>
              <span className="overviewAccount">From</span>
              <span className="overviewAccount">To</span>
            </div>
            {transactions.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== transactions.length - 1 ? " dottedBorder" : "")
                  }
                  key={i}
                >
                  <TransactionItem
                    transaction={item}
                    accounts={accounts}
                    categories={categories}
                  />
                </div>
              );
            })}
            <div className="overviewSummary">
              <span className="transactionsSum">Total Balance:</span>
              <span className="overviewAmount">
                {euroFormat.format(totalBalance)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
