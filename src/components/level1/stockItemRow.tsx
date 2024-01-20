import * as React from "react";
import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import LinkButton from "../atoms/link";
import { StockItem } from "../../stockTypes";

const StockItemRow = ({ stock }: { stock: StockItem }) => {
  return (
    <>
      <span className="overviewIsin">{stock.isin}</span>
      <span className="stockName">{stock.name}</span>
      <span className="overviewAmount">{stock.amount}</span>
      <span className="overviewAmount">{stock.price}</span>
      <span className="overviewAmount">{stock.sum}</span>
      <span>
        <LinkButton to={`/stocks/${stock.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
      <span>
        <LinkButton
          disabled={!stock.link}
          to={stock.link}
          target="_blank"
          title="navigate to linked info"
        >
          <ArrowTopRightOnSquareIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default StockItemRow;
