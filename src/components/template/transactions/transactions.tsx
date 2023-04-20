import * as React from "react";
import Headline from "../../atoms/headline";
import TransactionItem from "../../level1/transactionItem";
import Button from "../../atoms/button";
import { navigate } from "gatsby";
import { euroFormat } from "../../../helpers/helpers";

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
              <Button
                color={"addButton"}
                onClick={() => navigate("/transactions/new")}
                text={"Add New Transaction"}
              />
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
