import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import LinkButton from "../atoms/link";

interface OrderProps {
  stock: Stock;
}

const StockItem = ({ stock }: OrderProps) => {
  return (
    <>
      <span className="stockIsin">{stock.isin}</span>
      <span className="stockName">{stock.name}</span>
      <span className="orderAmount">{stock.amount}</span>
      <span className="orderPriceHeadline">
        {euroFormat.format(stock.price)}
      </span>
      <span className="orderSumHeadline">
        {euroFormat.format(stock.price * stock.amount)}
      </span>
      <span>
        <LinkButton to={`/stocks/${stock.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
      <span>
        <LinkButton
          disabled={!stock.link}
          to={stock.link ? stock.link : ""}
          target="_blank"
          title="navigate to linked info"
        >
          <ArrowTopRightOnSquareIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default StockItem;
