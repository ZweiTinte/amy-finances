import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import { getCategory } from "../../helpers/transactionsHelper";
import { getAccountName } from "../../helpers/accountsHelper";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface TransactionProps {
  transaction: Transaction;
  accounts: Account[];
}

const TransactionItem = ({ transaction, accounts }: TransactionProps) => {
  return (
    <>
      <span className="transactionId">{transaction.id?.toString()}</span>
      <span className="transactionDate">{transaction.transactionType}</span>
      <span className="transactionDate">{transaction.date}</span>
      <span className="transactionName">{transaction.name}</span>
      <span className="transactionCategory">
        {getCategory(transaction.category).value}
      </span>
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
        <LinkButton to={`/transactions/${transaction.id}`}>
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default TransactionItem;
