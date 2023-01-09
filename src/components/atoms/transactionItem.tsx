import * as React from "react";
import { euroFormat } from "../../helpers";

interface TransactionProps {
  transaction: Transaction;
  accounts: Account[];
}

const TransactionItem = ({ transaction, accounts }: TransactionProps) => {
  function getAccountName(accountId: number): string {
    if (accountId === 0) {
      return "";
    } else {
      return accounts.filter((account) => {
        return account.id === accountId;
      })[0].name;
    }
  }

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
        {getAccountName(transaction.from)}
      </span>
      <span className="transactionTo">{getAccountName(transaction.to)}</span>
    </>
  );
};

export default TransactionItem;
