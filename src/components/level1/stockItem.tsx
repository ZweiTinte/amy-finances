import * as React from "react";
import Button from "../atoms/button";
import { Link, navigate } from "gatsby";
import { euroFormat } from "../../helpers/helpers";
import { LinkIcon, PencilIcon } from "@heroicons/react/24/solid";

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
        <Button
          color={"editButton"}
          onClick={() => navigate(`/stocks/${stock.id}`)}
        >
          <PencilIcon className="heroIcon" />
        </Button>
      </span>
      <span>
        <Link
          className={!stock.link ? "disabledLink" : "link"}
          to={stock.link ? stock.link : ""}
          target="_blank"
        >
          <LinkIcon className="heroIcon" />
        </Link>
      </span>
    </>
  );
};

export default StockItem;
