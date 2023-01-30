import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import Button from "../atoms/button";
import { navigate } from "gatsby";
import { getAccountName } from "../../helpers/accountsHelper";

interface TransactionProps {
  transaction: Transaction;
  accounts: Account[];
}

const TransactionItem = ({ transaction, accounts }: TransactionProps) => {
  return (
    <>
      <span className="transactionId">{transaction.id.toString()}</span>
      <span className="transactionDate">{transaction.date}</span>
      <span className="transactionName">{transaction.name}</span>
      <span className="transactionCategory">{transaction.category}</span>
      <span className="transactionAmount">
        {euroFormat.format(transaction.amount)}
      </span>
      <span className="transactionFrom">
        {getAccountName(transaction.from, accounts)}
      </span>
      <span className="transactionTo">
        {getAccountName(transaction.to, accounts)}
      </span>
      <span>
        <Button
          color={"editButton"}
          onClick={() => navigate(`/transactions/${transaction.id}`)}
          text={"Edit"}
        />
      </span>
    </>
  );
};

export default TransactionItem;
