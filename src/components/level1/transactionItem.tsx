import * as React from "react";
import { euroFormat, getDDItem } from "../../helpers/helpers";
import { getAccountName } from "../../helpers/accountsHelper";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import { DropdownItem } from "../../dropdownTypes";

interface TransactionProps {
  transaction: Transaction;
  accounts: Account[];
  categories: DropdownItem[];
}

const TransactionItem = ({
  transaction,
  accounts,
  categories,
}: TransactionProps) => {
  return (
    <>
      <span className="transactionId">{transaction.id?.toString()}</span>
      <span className="transactionDate">{transaction.transactionType}</span>
      <span className="transactionDate">{transaction.date}</span>
      <span className="transactionName">{transaction.name}</span>
      <span className="transactionCategory">
        {getDDItem(transaction.category, categories).value}
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
        <LinkButton to={`/transactions/${transaction.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default TransactionItem;
