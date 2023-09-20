import * as React from "react";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TransactionItem } from "../../transactionTypes";

const TransactionItemRow = ({
  transactionItem,
}: {
  transactionItem: TransactionItem;
}) => {
  return (
    <>
      <span className="overviewId">{transactionItem.id}</span>
      <span className="overviewDate">{transactionItem.type}</span>
      <span className="overviewDate">{transactionItem.date}</span>
      <span className="transactionName">{transactionItem.name}</span>
      <span className="overviewCategory">{transactionItem.category}</span>
      <span className="overviewAmount">{transactionItem.amount}</span>
      <span className="overviewAccount">{transactionItem.from}</span>
      <span className="overviewAccount">{transactionItem.to}</span>
      <span>
        <LinkButton to={`/transactions/${transactionItem.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default TransactionItemRow;
