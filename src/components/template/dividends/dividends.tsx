import * as React from "react";
import Headline from "../../atoms/headline";
import DividendItem from "../../level1/dividendItem";
import { PlusIcon } from "@heroicons/react/24/solid";
import LinkButton from "../../atoms/link";
import { euroFormat } from "../../../helpers/helpers";

const Dividends = ({
  dividends,
  accounts,
  stocks,
  totalBalance,
}: {
  dividends: Dividend[];
  accounts: Account[];
  stocks: Stock[];
  totalBalance: number;
}) => {
  return (
    <>
      {dividends && accounts && stocks && (
        <div className="gameLayout">
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Dividends Overview" style="cardHeadline" />
              <LinkButton to="/dividends/new" title="add new dividend">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="overviewHead">
              <span className="overviewId">ID</span>
              <span className="overviewDate">Pay-Date</span>
              <span className="overviewDate">Ex-Date</span>
              <span className="overviewIsin">ISIN</span>
              <span className="stockName">Name</span>
              <span className="overviewAmountHeadline">Amount</span>
              <span className="overviewAmountHeadline">Tax</span>
              <span className="overviewAmountHeadline">Sum</span>
              <span className="overviewAccount">To</span>
            </div>
            {dividends.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
                    (i !== dividends.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <DividendItem
                    dividend={item}
                    accounts={accounts}
                    stocks={stocks}
                  />
                </div>
              );
            })}
            <div className="overviewSummary">
              <span className="dividendsSum">Total Dividends:</span>
              <span className="overviewAmountHeadline">
                {euroFormat.format(totalBalance)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dividends;
