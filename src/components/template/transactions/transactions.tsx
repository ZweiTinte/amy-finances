import * as React from "react";
import Headline from "../../atoms/headline";
import TransactionItem from "../../level1/transactionItem";
import { euroFormat } from "../../../helpers/helpers";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";

const Transactions = ({
  transactions,
  accounts,
  totalBalance,
}: {
  transactions: Transaction[];
  accounts: Account[];
  totalBalance: number;
}) => {
  return (
    <>
      {transactions && accounts && (
        <div className="gameLayout">
          <div className="transactionsCard">
            <div className="formRowDefault">
              <Headline
                text="Transactions Overview"
                style="transactionsHeadline"
              />
              <LinkButton to="/transactions/new">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="transactionProps">
              <span className="transactionId">ID</span>
              <span className="transactionDate">Type</span>
              <span className="transactionDate">Date</span>
              <span className="transactionName">Name</span>
              <span className="transactionCategory">Category</span>
              <span className="transactionAmountHeadline">Amount</span>
              <span className="transactionFrom">From</span>
              <span className="transactionTo">To</span>
            </div>
            {transactions.map((item, i) => {
              return (
                <div
                  className={
                    "transactionInfos" +
                    (i !== transactions.length - 1 ? " dottedBorder" : "")
                  }
                  key={i}
                >
                  <TransactionItem transaction={item} accounts={accounts} />
                </div>
              );
            })}
            <div className="accountsSummary">
              <span className="transactionsSum">Total Balance:</span>
              <span className="transactionAmount">
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
