import * as React from "react";
import Dividends from "./dividends";
import DividendSidebarRight from "./dividendSidebarRight";

const DividendsOverview = ({
  accounts,
  stocks,
  dividends,
}: {
  accounts?: Account[];
  stocks?: Stock[];
  dividends?: Dividend[];
}) => {
  const [filteredDividends, setFilteredDividends] = React.useState<Dividend[]>(
    dividends || []
  );
  const [totalBalance, setTotalBalance] = React.useState<number>(0);
  const [filtered, setFiltered] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (dividends) {
      setFilteredDividends(dividends);
    }
  }, [dividends]);

  React.useEffect(() => {
    let total = 0;
    filteredDividends.forEach((dividend) => {
      total += dividend.amountBeforeTax - dividend.taxAmount;
    });
    setTotalBalance(total);
  }, [filteredDividends]);

  return (
    <>
      {dividends && accounts && stocks && (
        <>
          {filtered && (
            <Dividends
              dividends={
                dividends.length > 1
                  ? filteredDividends.sort((a, b) => {
                      return Date.parse(a.payDate) - Date.parse(b.payDate);
                    })
                  : dividends
              }
              totalBalance={totalBalance}
              accounts={accounts}
              stocks={stocks}
            />
          )}
          <DividendSidebarRight
            dividends={dividends}
            stocks={stocks.map((stock) => {
              return { id: stock.id, value: stock.name };
            })}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredDividends={setFilteredDividends}
            setFiltered={setFiltered}
          />
        </>
      )}
    </>
  );
};

export default DividendsOverview;
