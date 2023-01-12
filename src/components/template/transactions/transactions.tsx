import * as React from "react";
import Headline from "../../atoms/headline";
import TransactionItem from "../../atoms/transactionItem";

const Transactions = ({
  transactions,
  accounts,
}: {
  transactions: Transaction[];
  accounts: Account[];
}) => {
  return (
    <>
      <div className="gameLayout">
        <div className="transactionsCard">
          <Headline text="Transactions Overview" style="transactionsHeadline" />
          <div className="transactionProps">
            <span className="transactionId">ID</span>
            <span className="transactionDate">Date</span>
            <span className="transactionName">Name</span>
            <span className="transactionCategory">Category</span>
            <span className="transactionAmountHeadline">Amount</span>
            <span className="transactionFrom">From</span>
            <span className="transactionTo">To</span>
          </div>
          {transactions.map((item) => {
            return (
              <div className="transactionInfos" key={item.id}>
                <TransactionItem transaction={item} accounts={accounts} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Transactions;
