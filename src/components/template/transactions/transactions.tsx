import * as React from "react";
import Headline from "../../atoms/headline";
import TransactionItem from "../../level1/transactionItem";
import Button from "../../atoms/button";
import { navigate } from "gatsby";

const Transactions = ({
  transactions,
  accounts,
}: {
  transactions: Transaction[];
  accounts: Account[];
}) => {
  return (
    <div className="gameLayout">
      <div className="transactionsCard">
        <div className="formRowDefault">
          <Headline text="Transactions Overview" style="transactionsHeadline" />
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
          if (item.transactionType === "Recurring") {
            if (
              item.recurringPeriod === "Day" &&
              item.recurringEnd &&
              item.recurringGap
            ) {
              let recurringTransactions = [];
              let recurringDate = new Date(item.date);
              while (recurringDate < new Date(item.recurringEnd)) {
                const itemCopy = structuredClone(item);
                itemCopy.date = recurringDate.toISOString().split("T")[0];
                recurringTransactions.push(itemCopy);
                recurringDate.setDate(
                  recurringDate.getDate() + item.recurringGap
                );
              }
              return recurringTransactions.map((trans, j) => {
                return (
                  <div
                    className={
                      "transactionInfos" +
                      (i === transactions.length - 1 &&
                      j === recurringTransactions.length - 1
                        ? ""
                        : " dottedBorder")
                    }
                    key={j}
                  >
                    <TransactionItem transaction={trans} accounts={accounts} />
                  </div>
                );
              });
            }
          } else {
            return (
              <div
                className={
                  "transactionInfos" +
                  (i !== transactions.length - 1 ? " dottedBorder" : "")
                }
                key={item.id}
              >
                <TransactionItem transaction={item} accounts={accounts} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Transactions;
