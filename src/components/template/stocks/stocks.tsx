import * as React from "react";
import Headline from "../../atoms/headline";
import StockItemRow from "../../level1/stockItemRow";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";
import { getStockItems, stockItemFields } from "../../../helpers/stocksHelper";
import { download } from "../../../helpers/downloadService";
import Button from "../../atoms/button";

const Stocks = ({ stocks }: { stocks: Stock[] }) => {
  const [sort, setSort] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);
  function sortTable(key: string) {
    if (sort === key) {
      setSortAsc(!sortAsc);
    } else {
      setSort(key);
    }
  }
  return (
    <>
      {stocks && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Stocks Overview" style="cardHeadline" />
              <div className="inlineRow">
                <Button
                  onClick={() =>
                    download(
                      "stocks",
                      stockItemFields,
                      getStockItems(stocks, sort, sortAsc)
                    )
                  }
                  text="Download"
                  color={"downloadButton"}
                />
                <LinkButton
                  to="/stocks/new"
                  title="add new stock"
                  classes="addLink"
                >
                  <PlusIcon className="heroIcon" />
                </LinkButton>
              </div>
            </div>
            <div className="overviewHead">
              <span className="overviewIsin" onClick={() => sortTable("isin")}>
                ISIN
              </span>
              <span className="stockName" onClick={() => sortTable("name")}>
                Name
              </span>
              <span
                className="overviewAmount"
                onClick={() => sortTable("amount")}
              >
                Amount
              </span>
              <span
                className="overviewAmountHeadline"
                onClick={() => sortTable("price")}
              >
                Price
              </span>
              <span
                className="overviewAmountHeadline"
                onClick={() => sortTable("sum")}
              >
                Sum
              </span>
            </div>
            {getStockItems(stocks, sort, sortAsc).map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== stocks.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <StockItemRow stock={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Stocks;
