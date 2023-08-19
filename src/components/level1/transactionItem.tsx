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
      <span className="overviewId">{transaction.id?.toString()}</span>
      <span className="overviewDate">{transaction.transactionType}</span>
      <span className="overviewDate">{transaction.date}</span>
      <span className="transactionName">{transaction.name}</span>
      <span className="overviewCategory">
        {getDDItem(transaction.category, categories).value}
      </span>
      <span className="overviewAmount">
        {euroFormat.format(transaction.amount)}
      </span>
      <span className="overviewAccount">
        {getAccountName(transaction.from, accounts)}
      </span>
      <span className="overviewAccount">
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
